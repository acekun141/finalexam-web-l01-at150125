import { getUserInfoService } from "../../../utils/user/userService";
import { GET_INFO } from "./actionTypes";

export const getUserInfoAction = (callback: any) => async (dispatch: any) => {
	const { data, error } = await getUserInfoService();
	if (error) return;
	dispatch({ type: GET_INFO, payload: data });
	callback();
}
