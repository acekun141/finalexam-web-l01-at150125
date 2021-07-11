import express from "express";
import { Router } from "../_interface";
import { validation } from "../_middleware";
import { LoginDTO, RegisterDTO, RejectTokenDTO, RefreshTokenDTO } from "./auth.dto";
import Controller from "./auth.controller";
import passport from "passport";


export default class AuthRouter implements Router {
	public router = express.Router();
	public path = "/auth";
	private controller = new Controller();

	constructor() {
		this.initializeController();
	}

	private initializeController(): void {
		this.router.post(`${this.path}/login`, validation(LoginDTO), this.controller.login);
		this.router.post(`${this.path}/register`, validation(RegisterDTO), this.controller.register);
		this.router.post(`${this.path}/token`, validation(RefreshTokenDTO), this.controller.token);
		this.router.post(
			`${this.path}/reject`,
			validation(RejectTokenDTO),
			passport.authenticate("jwt"),
			this.controller.rejectToken
		);
	}
}