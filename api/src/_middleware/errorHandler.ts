import { Response, Request, NextFunction } from "express";
import { HttpException } from "../_exception";

export const errorMiddleware = (
	error: HttpException, req: Request,
	res: Response, next: NextFunction
) => {
	const status = error.status || 500;
	const message = error.message || "Server Error";

	res.status(status).json({ message });
}