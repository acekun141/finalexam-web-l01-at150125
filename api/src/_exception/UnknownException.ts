import { HttpException } from "./HttpException";

export class UnknownException extends HttpException {
	constructor() {
		super(400, "Something wrong. Try it later!");
	}
}
