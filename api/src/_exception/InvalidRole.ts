import { HttpException } from "./HttpException";

export class InvalidRole extends HttpException {
	constructor() {
		super(400, "Invalid Role");
	}
}