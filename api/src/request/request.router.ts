import express from "express";
import { validateRole, validation } from "../_middleware";
import { Router } from "../_interface";
import RequestController from "./request.controller";
import { AcceptRequestDTO, CreateRequestDTO, DeleteRequestDTO, UserRequestDTO } from "./request.dto";
import passport from "passport";

export default class RequestRouter implements Router {
    public router = express.Router();
    public path = '/request';

    private controller = new RequestController();

    constructor() {
        this.initializeController();
    }

    private initializeController() {
        this.router.post(
            `${this.path}/create`,
            passport.authenticate("jwt"),
            validation(CreateRequestDTO),
            this.controller.createRequest
        );
        this.router.post(
            `${this.path}/delete`,
            passport.authenticate("jwt"),
            validation(DeleteRequestDTO),
            this.controller.deleteRequest
        );
        this.router.post(
            `${this.path}/accept`,
            passport.authenticate("jwt"),
            validateRole(["admin"]),
            validation(AcceptRequestDTO),
            this.controller.acceptRequest
        );
        this.router.post(
            `${this.path}/user`,
            passport.authenticate("jwt"),
            validation(UserRequestDTO),
            this.controller.getUserRequest
        );
    }
}