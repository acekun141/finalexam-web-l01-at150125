import express from "express";
import { Router } from "../_interface";
import passport from "passport";
import UserInfoController from "./userInfo.controller";
import { validation } from "../_middleware";
import { CreateOrUpdateDTO } from "./userInfo.dto";

export default class UserInfoRouter implements Router {
	public router = express.Router();
	public path = "/user-info";

	private controller = new UserInfoController();

	constructor() {
		this.initializeController();
	}

	private initializeController() {
		this.router.post(
      `${this.path}`,
      passport.authenticate("jwt"),
      validation(CreateOrUpdateDTO),
      this.controller.createOrUpdate
    );
	}
}