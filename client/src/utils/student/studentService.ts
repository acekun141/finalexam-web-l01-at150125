import API, { handleError } from "../API";
import { IServiceResult } from "../serviceInterface";

export const getListChildrenService = async (parentId: string): Promise<IServiceResult<any>> => {
	try {
		const { data } = await API.post("/student/list", { parent_id: parentId });
		return {
			error: null,
			data: data.list
		};
	} catch (error) {
		return handleError(error);
	}
}

export const updateStudentService = async (parentId: string, studentId: string, data: any): Promise<IServiceResult<any>> => {
	try {
		await API.post("/student/update", { parent_id: parentId, student_id: studentId,...data });
		return {
			error: null,
			data: null
		};
	} catch (error) {
		return handleError(error);
	}
}

export const createStudentService = async (student: any): Promise<IServiceResult<any>> => {
	try {
		await API.post("/student/create", { ...student });
		return {
			error: null,
			data: null
		};
	} catch (error) {
		return handleError(error);
	}
}

export const deleteStudentService = async (studentId: string): Promise<IServiceResult<any>> => {
	try {
		await API.post("/student/delete", { student_id: studentId });
		return {
			error: null,
			data: null
		};
	} catch (error) {
		return handleError(error);
	}
}