import { Router as ExpressRouter } from "express";

export interface Router {
	router: ExpressRouter;
	path: string;
}
