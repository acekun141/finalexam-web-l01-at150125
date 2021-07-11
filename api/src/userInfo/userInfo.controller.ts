import { Request, Response, NextFunction } from "express";
import { RequestWithUser } from "../_interface";
import UserInfoService from "./userInfo.service";

export default class UserInfoController {
	private service = new UserInfoService();
	
	public createOrUpdate = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			const user_id = req.user.id;
			await this.service.createOrUpdate(user_id, req.body);
			res.sendStatus(200);
		} catch (error) {
			next(error);
		}
	}
}