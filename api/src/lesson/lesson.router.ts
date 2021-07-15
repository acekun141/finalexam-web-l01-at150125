import express from "express";
import { Router } from "../_interface";
import LessonController from "./lesson.controller";
import { validateRole, validation } from "../_middleware";
import passport from "passport";
import { CreateLessonDTO, DeleteLessonDTO, UpdateAbsentDTO, UpdateLessonDTO } from "./lesson.dto";


export default class LessonRouter implements Router {
	public router = express.Router();
	public path = "/lesson";

	private controller = new LessonController();

	constructor() {
		this.initializeController();
	}
	
	private initializeController(): void {
		this.router.post(
			`${this.path}/create`,
			passport.authenticate("jwt"),	
			validateRole(["admin", "teacher"]),
			validation(CreateLessonDTO),
			this.controller.createLesson
		);
		this.router.post(
			`${this.path}/delete`,
			passport.authenticate("jwt"),	
			validateRole(["admin", "teacher"]),
			validation(DeleteLessonDTO),
			this.controller.deleteLesson
		);
		this.router.post(
			`${this.path}/update_absent`,
			passport.authenticate("jwt"),
			validateRole(["admin", "teacher"]),
			validation(UpdateAbsentDTO),
			this.controller.updateAbsent
		);
		this.router.post(
			`${this.path}/update_info`,
			passport.authenticate("jwt"),
			validateRole(["admin", "teacher"]),
			validation(UpdateLessonDTO),
			this.controller.updateLesson
		)
	}
}