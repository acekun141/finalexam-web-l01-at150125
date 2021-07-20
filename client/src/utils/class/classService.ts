import API, { handleError } from "../API";
import { IServiceResult } from "../serviceInterface";
import { IClass } from "./classInterface";

export const createClassService = async (body: Omit<IClass, 'teacher_id'>): Promise<IServiceResult<null>> => {
	try {
		const { data } = await API.post("/class/create", body);
		return {
			error: null,
			data: null
		};
	} catch (error) {
		return handleError(error);
	}
}

export const getListClassService = async (): Promise<IServiceResult<any[]>> => {
	try {
		const { data } = await API.get("/class");
		return {
			error: null,
			data: data.list
		};
	} catch (error) {
		return handleError(error);
	}
}

export const getClassInfoService = async (class_id: string): Promise<IServiceResult<any>> => {
	try {
		const { data } = await API.post("/class/class_info", { class_id });
		return {
			error: null,
			data: data.class
		};
	} catch (error) {
		return handleError(error);
	}
}

export const updateClassTeacherService = async (teacher_id: string, class_id: string): Promise<IServiceResult<any>> => {
	try {
		const { data } = await API.post("/class/update_teacher", { teacher_id, class_id });
		return {
			error: null,
			data: null
		}
	} catch (error) {
		return handleError(error);
	}
}
