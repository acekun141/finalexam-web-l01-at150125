import { HttpException } from "./HttpException";

export class UserWithUsernameAlreadyExisted extends HttpException {
	constructor(username: string) {
		super(400, `User ${username} already existed`);
	}
}