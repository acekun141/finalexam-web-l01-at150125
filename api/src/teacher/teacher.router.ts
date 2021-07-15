import express from "express";
import passport from "passport";

import { Router } from "../_interface";
import { RegisterTeacherDTO } from "./teacher.dto";
import { validateRole, validation } from "../_middleware";
import TeacherController from "./teacher.controller";


export default class TeacherRouter implements Router {
	public router = express.Router();
	public path = "/teacher";

	private controller = new TeacherController();
	
	constructor() {
		this.initializeController();
	}

	private initializeController(): void {
		this.router.post(
      `${this.path}/create`,
      passport.authenticate("jwt"),
      validateRole(["admin"]),
      validation(RegisterTeacherDTO),
      this.controller.register
    );
	}
}