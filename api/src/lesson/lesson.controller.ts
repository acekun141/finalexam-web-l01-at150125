import { Request, Response, NextFunction } from "express";
import { RequestWithUser } from "../_interface";
import LessonService from "./lesson.service";

export default class LessonController {
	private lessonService = new LessonService();

	public createLesson = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { class_id, ...data } = req.body;
			await this.lessonService.createLesson(class_id, data);
			res.sendStatus(201);
		} catch (error) {
			next(error);
		}
	};

	public updateLesson = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			await this.lessonService.updateLesson(req.body, req.user);
			res.sendStatus(200);
		} catch (error) {
			next(error);
		}
	}

	public deleteLesson = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			const { lesson_id } = req.body;
			await this.lessonService.removeLesson(lesson_id, req.user);
			res.sendStatus(204);
		} catch (error) {
			next(error);
		}
	};

	public updateAbsent = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { lesson_id, list } = req.body;
			await this.lessonService.updateAbsent(lesson_id, list);
			res.sendStatus(200);
		} catch (error) {
			next(error);
		}
	}
}