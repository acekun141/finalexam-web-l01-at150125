import API, { handleError } from "../API";
import { ILoginResult } from "./authInterface";
import { IServiceResult } from "../serviceInterface";

export const loginService = async (username: string, password: string): Promise<IServiceResult<ILoginResult>> => {
	try {
		const { data } = await API.post("/auth/login", { username, password });
		return {
			error: null,
			data: { access_token: data.access_token, refresh_token: data.refresh_token }
		};
	} catch (error) {
		return handleError(error);
	}
}