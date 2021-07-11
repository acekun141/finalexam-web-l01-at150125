import API, { handleError } from "../API";
import { IServiceResult } from "../serviceInterface";
import { IUserInfo } from "./userInterface";

export const getUserInfoService = async (): Promise<IServiceResult<IUserInfo>> => {
	try {
		const { data } = await API.post("/user/info", {});
		return { error: null, data };
	} catch (error) {
		return handleError(error);
	}
};

export const updateUserInfoService = async (data: Omit<IUserInfo, "username" | "id" | "role">): Promise<IServiceResult<void>> => {
	try {
		await API.post("/user-info", data);
		return { error: null, data: null };
	} catch (error) {
		return handleError(error);
	}
}