import { Request, Response, NextFunction } from "express";
import AuthService from "../auth/auth.service";
import TeacherService from "./teacher.service";

export default class TeacherController {
	private authService = new AuthService();
	private teacherService = new TeacherService();

	public register = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const result = await this.authService.createUser(req.body, 'teacher', req.body.username);
			if (result) {
				res.sendStatus(201);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			next(error);
		}
	}
}