import API, { handleError } from "../API";
import { ILoginResult } from "./authInterface";
import { IServiceResult } from "../serviceInterface";
import { IUserInfo } from "../user/userInterface";

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

export const registerService = async (
  data:
    | Omit<IUserInfo, "username" | "id" | "avatar" | "role">
    | { password: string }
): Promise<IServiceResult<null>> => {
  try {
    await API.post("/auth/register", { ...data });
    return { error: null, data: null };
  } catch (error) {
    return handleError(error);
  }
};

// export interface IUserInfo {
// 	username: string;
// 	id: string;
// 	role: "admin" | "student" | "parent" | "teacher";
// 	first_name?: string;
// 	last_name?: string;
// 	phone_number?: string;
// 	date_of_birth?: string;
// 	sex?: string;
// 	avatar?: string;
// }