import { Request, Response, NextFunction } from "express";
import { RequestWithUser } from "../_interface";
import StudentService from "./student.service";

export default class StudentController {
	private service = new StudentService();

	public createStudent = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			await this.service.createStudent(req.body, req.user);
			res.sendStatus(201);
		} catch (error) {
			next(error);
		}
	};

	public removeStudent = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			const { student_id } = req.body;
			await this.service.removeStudent(student_id, req.user.id);
			res.sendStatus(204);
	 	} catch (error) {
			next(error);
		}
	};

	public updateStudent = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			const { student_id, parent_id } = req.body;
			await this.service.updateStudent(student_id, parent_id, req.user, req.body);
			res.sendStatus(200);
		} catch (error) {
			next(error);
		}
	}

	public getChildrenWithParent = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			const { parent_id } = req.body;
			const list = await this.service.getListChildrenWithParent(parent_id);
			res.json({ list });
		} catch (error) {
			next(error);
		}
	}
}