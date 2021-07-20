import { Request, Response, NextFunction } from "express";
import { UnknownException } from "../_exception";
import ClassService from "./class.service";

export default class ClassController {
	private classService = new ClassService();

	public create = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const result = await this.classService.createClass(req.body);
			if (result) {
				return res.sendStatus(201);
			}
			return next(new UnknownException())
		} catch (error) {
			next(error);
		}
	}

	public getList = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const list = await this.classService.getList();
			res.status(200).json({ list });
		} catch (error) {
			next(error);
		}
	}

	public getInfo = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { class_id } = req.body;
			const result = await this.classService.getInfo(class_id);
			res.json({ class: result });
		} catch (error) {
			next(error);
		} 
	}

	public addStudent = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { class_id, student_id } = req.body;
			const result = await this.classService.addStudent(class_id, student_id);
			if (result) {
				return res.sendStatus(201);
			}
			return next(new UnknownException())
		} catch (error) {
			next(error);
		}
	}

	public removeStudent = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { class_id, student_id } = req.body;
			const result = await this.classService.removeStudent(class_id, student_id);
			if (result) {
				return res.sendStatus(204);
			}
			return next(new UnknownException())
		} catch (error) {
			next(error);
		}
	}

	public updateTeacher = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { class_id, teacher_id } = req.body;
			const result = await this.classService.updateTeacher(class_id, teacher_id);
			if (result) {
				return res.sendStatus(200);
			}
			return next(new UnknownException())
		} catch (error) {
			next(error);
		}
	}
}
