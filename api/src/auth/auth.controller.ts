import { Request, Response, NextFunction } from "express";
import AuthService from "./auth.service";
import TokenService from "../token/token.service";
import { RequestWithUser, TokenResult } from "../_interface";

export default class AuthController {
	public authService = new AuthService();
	public tokenService = new TokenService();

	public login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { username, password } = req.body;
			const tokenResult: TokenResult = await this.authService.login({ username, password });
			res.json({
				access_token: tokenResult.accessToken,
				refresh_token: tokenResult.refreshToken
			});
		} catch (error) {
			next(error);
		}
	}

	public register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const result = await this.authService.createUser(req.body, 'parent', req.body.phone_number);
			if (result) {
				res.sendStatus(201);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			next(error);
		}
	}

	public token = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const { username, refresh_token } = req.body;
		const accessToken = await this.authService.refreshToken({ username, refresh_token });
		if (accessToken) {
			res.status(201).json({ access_token: accessToken });
		} else {
			res.sendStatus(401);
		}
	}

	public rejectToken = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { username } = req.user;
			const { refresh_token } = req.body;
			const success = await this.tokenService.rejectToken(refresh_token, username);
			if (success) {
				res.sendStatus(201);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			next(error);
		}
	}
}