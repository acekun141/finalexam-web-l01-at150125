import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserWithUsernameAlreadyExisted, WrongCredential } from "../_exception";
import { User } from "../user/user.interface";
import UserModel from "../user/user.model";
import TokenModel from "../token/token.model";
import { TokenPayload, TokenResult } from "../_interface";
import TokenService from "../token/token.service";
import { v4 } from "uuid";

export default class AuthService {
	public user = UserModel;
	public token = TokenModel;
	private tokenService = new TokenService();

	public async createUser(payload: Omit<User, 'id' | 'role'>) {
		const userWithUsername = await this.user.findOne({ username: payload.username });
		if (userWithUsername) {
			throw new UserWithUsernameAlreadyExisted(payload.username);
		}
		const password = await bcrypt.hash(payload.password, 10);
		const id = v4();
		await this.user.create({ ...payload, password, id });
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