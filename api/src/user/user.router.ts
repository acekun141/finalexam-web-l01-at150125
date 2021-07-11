import express from "express";
import { Router } from "../_interface";
import UserController from "./user.controller";
import passport from "passport";

export default class UserRouter implements Router {
	public router = express.Router();
	public path = '/user';
	
	private controller = new UserController();

	constructor() {
		this.initializeController();
	}

	private initializeController() {
		this.router.post(`${this.path}/info`, passport.authenticate("jwt"), this.controller.userInfo);
	}
}