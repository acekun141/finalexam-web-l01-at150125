import { Response, NextFunction } from "express";
import { InvalidRole } from "../_exception";
import { RequestWithUser, Role } from "../_interface";

export const validateRole = (roles: Role[]) => {
	return (req: RequestWithUser, res: Response, next: NextFunction) => {
		const { role } = req.user;
		console.log(role, roles);
		if (roles.includes(role)) {
			next();
		} else {
			next(new InvalidRole());
		}
	}
}