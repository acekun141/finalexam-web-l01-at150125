import { HttpException } from "./HttpException";

export class WrongCredential extends HttpException {
	constructor() {
		super(404, "Wrong credential provided.");
	}
}