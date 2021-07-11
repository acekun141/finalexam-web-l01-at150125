import { HttpException } from "./HttpException";

export class InvalidToken extends HttpException {
	constructor() {
		super(404, "Invalid Token");
	}
}