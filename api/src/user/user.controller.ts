import { Request, Response, NextFunction } from "express";
import { RequestWithUser } from "../_interface";
import UserService from "./user.service";

export default class UserController {
	private userService = new UserService();
	public userInfo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		const user = await this.userService.getUserInfo(req.user.id);
		res.json({ user });
	}
}