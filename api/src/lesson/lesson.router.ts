import express from "express";
import { Router } from "../_interface";
import LessonController from "./lesson.controller";
import { validateRole, validation } from "../_middleware";
import passport from "passport";
import { CreateLessonDTO, UpdateAbsentDTO } from "./lesson.dto";


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
			// TODO:
			// passport.authenticate("jwt"),	
			// validateRole(["admin", "teacher"]),
			validation(CreateLessonDTO),
			this.controller.createLesson
		);
		this.router.post(
			`${this.path}/delete`,
			// TODO:
			// passport.authenticate("jwt"),	
			// validateRole(["admin", "teacher"]),
			validation(CreateLessonDTO),
			this.controller.createLesson
		);
		this.router.post(
			`${this.path}/update_absent`,
			// TODO:
			// passport.authenticate("jwt"),
			// validateRole(["admin", "teacher"]),
			validation(UpdateAbsentDTO),
			this.controller.updateAbsent
		)
	}
}