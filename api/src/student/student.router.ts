import express from "express";
import passport from "passport";

import { Router } from "../_interface";
import StudentController from "./student.controller";
import { validateRole, validation } from "../_middleware";
import { DeleteStudentDTO, GetListWithParentDTO, RegisterStudentDTO } from "./student.dto";


export default class StudentRouter implements Router {
  public router = express.Router();
  public path = "/student";

  private controller = new StudentController();
  constructor() {
    this.initializeController();
  }

  private initializeController(): void {
    this.router.post(
      `${this.path}/create`,
      passport.authenticate("jwt"),
			validateRole(["parent"]),
			validation(RegisterStudentDTO),
      this.controller.createStudent
    );
    this.router.post(
      `${this.path}/delete`,
      passport.authenticate("jwt"),
			validateRole(["parent"]),
			validation(DeleteStudentDTO),
      this.controller.removeStudent
    );
    this.router.post(
      `${this.path}/list`,
      passport.authenticate("jwt"),
			validation(GetListWithParentDTO),
      this.controller.getChildrenWithParent
    );
  }
}