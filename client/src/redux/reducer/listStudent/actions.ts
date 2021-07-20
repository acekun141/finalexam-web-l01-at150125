import { getListChildrenService } from "../../../utils/student";
import { GET_LIST_STUDENT } from "./actionTypes";

export const getListStudentAction = (parentId: string, callback?: any) => async (dispatch: any) => {
	const { data, error } = await getListChildrenService(parentId);
	if (error) return;
	dispatch({ type: GET_LIST_STUDENT, payload: data });
    if (typeof(callback) === "function") {
        callback();
    }
}

