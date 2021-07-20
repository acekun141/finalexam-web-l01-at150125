import { getListClassService } from "../../../utils/class";
import { GET_LIST_CLASS } from "./actionTypes";

export const getListClassAction = (callback?: any) => async (dispatch: any) => {
	const { data, error } = await getListClassService();
	if (error) return;
	if (typeof(callback) === "function") {
		callback();
	}
	dispatch({ type: GET_LIST_CLASS, payload: data });
}
