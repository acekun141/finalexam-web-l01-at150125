import API, { handleError } from "../API";
import { IServiceResult } from "../serviceInterface";

export const getUserRequestService = async (user_id: string): Promise<IServiceResult<any>> => {
	try {
		const { data } = await API.post("/request/user", { user_id });
		return {
			error: null,
			data: data.list
		};
	} catch (error) {
		return handleError(error);
	}
}

export const createRequestService = async (from: string, student_id: string, class_id: string): Promise<IServiceResult<any>> => {
    console.log(from, student_id, class_id);
    try {
        const { data } = await API.post("/request/create", { from, student_id, class_id });
        return {
            error: null,
            data: data.list
        }
    } catch (error) {
        return handleError(error);
    }
}