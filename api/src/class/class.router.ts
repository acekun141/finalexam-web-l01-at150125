import passport from "passport";
import express from "express";

import { Router } from "../_interface";
import { validation, validateRole } from "../_middleware";
import { AddStudentDTO, CreateClassDTO, GetInfoDTO, UpdateTeacherDTO } from "./class.dto";
import ClassController from "./class.controller";


export default class ClassRouter implements Router {
	public router = express.Router();
	public path = "/class";

	private controller = new ClassController();

	constructor() {
		this.initializeController();
	}

	private initializeController(): void {
		this.router.post(
      `${this.path}/create`,
			// TODO: add authen
      // passport.authenticate("jwt"),
      // validateRole(["admin"]),
      validation(CreateClassDTO),
			this.controller.create
    );
		this.router.post(
			`${this.path}/class_info`,
			// TODO: add authen
      // passport.authenticate("jwt"),
      validation(GetInfoDTO),
			this.controller.getInfo
		);
		this.router.post(
      `${this.path}/add_student`,
			// TODO: add authen
      // passport.authenticate("jwt"),
      // validateRole(["admin"]),
      validation(AddStudentDTO),
			this.controller.addStudent
    );
		this.router.post(
      `${this.path}/remove_student`,
			// TODO: add authen
      // passport.authenticate("jwt"),
      // validateRole(["admin"]),
      validation(AddStudentDTO),
			this.controller.removeStudent
    );
		this.router.post(
			`${this.path}/update_teacher`,
			// TODO: add authen
      // passport.authenticate("jwt"),
      // validateRole(["admin"]),
      validation(UpdateTeacherDTO),
			this.controller.updateTeacher
		)
	}
}