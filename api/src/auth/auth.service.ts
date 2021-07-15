import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserWithUsernameAlreadyExisted, WrongCredential } from "../_exception";
import { User } from "../user/user.interface";
import { IUserInfo } from "../userInfo/userInfo.interface";
import UserInfo from "../userInfo/userInfo.model";
import UserModel from "../user/user.model";
import TokenModel from "../token/token.model";
import { Role, TokenPayload, TokenResult } from "../_interface";
import TokenService from "../token/token.service";
import { v4 } from "uuid";

export default class AuthService {
	private user = UserModel;
	private token = TokenModel;
	private userInfo = UserInfo;
	private tokenService = new TokenService();

	public async createUser(payload: Omit<User & IUserInfo, 'id' >, role: Role, username: string) {
		const userWithUsername = await this.user.findOne({ username });
		if (userWithUsername) {
			throw new UserWithUsernameAlreadyExisted(username);
		}
		const password = await bcrypt.hash(payload.password, 10);
		const id = v4();
		try {
			const newUser = await this.user.create({ role, username, password, id });
			const { phone_number, first_name, last_name, sex, date_of_birth } = payload;
			await this.userInfo.create({ user_id: newUser.id, phone_number, first_name, last_name, sex, date_of_birth });
		} catch (error) {
			this.user.deleteOne({ username: payload.phone_number });
			throw error;
		}
		return true;
	}

	public async login(payload: Omit<User, 'id' | 'role'>): Promise<TokenResult> {
		const user = await this.user.findOne({ username: payload.username });
		if (!user) throw new WrongCredential();
		const isPasswordCorrect = await bcrypt.compare(payload.password, user.password);
		if (isPasswordCorrect) {
			const tokenPayload: TokenPayload = {
				username: user.username,
				role: user.role,
				id: user.id
			};
			const refreshToken = await this.tokenService.createToken(payload.username);
			const accessToken = jwt.sign(
				tokenPayload,
				process.env.SECRET || "SECRET",
				{ expiresIn: 300 }
			);
			return { accessToken, refreshToken };
		}
		throw new WrongCredential();
	}

	public async refreshToken(payload: { username: string, refresh_token: string }): Promise<string | boolean> {
		const token = await this.token.findOne({ token: payload.refresh_token, username: payload.username });
		if (token && token.username === payload.username) {
			const user = await this.user.findOne({ username: payload.username });
			const tokenPayload: TokenPayload = {
				id: user.id,
				username: user.username,
				role: user.role
			};
			const accessToken = jwt.sign(
				tokenPayload,
				process.env.SECRET || 'SECRET',
				{ expiresIn: 3000 }
			);
			return accessToken;
		}
		return false;
	};
}