import { NextFunction, Request, Response } from "express";
import RequestService from "./request.service";

export default class RequestController {
    private service = new RequestService();

    public createRequest = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.service.createRequest(req.body);
            res.sendStatus(201);
        } catch (error) {
            next(error);
        }
    }

    public deleteRequest = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { request_id } = req.body;
            await this.service.deleteRequest(request_id);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }

    public acceptRequest = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { request_id } = req.body;
            await this.service.acceptRequest(request_id);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

    public getUserRequest = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const list = await this.service.getUserRequest(req.body.user_id);
            res.json({ list });
        } catch (error) {
            next(error);
        }
    }
}