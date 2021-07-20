import ClassModel from "../class/class.model";
import { HttpException } from "../_exception";
import { IRequest } from "./request.interface";
import RequestModel from "./request.model";

export default class RequestSeriver {
    private requestModel = RequestModel;
    private classModel = ClassModel;

    public createRequest = async (data: IRequest) => {
        try {
            const request = await this.requestModel.findOne({ student_id: data.student_id, class_id: data.class_id });
            if (request) {
                throw new HttpException(400, "Request existed");
            }
            await this.requestModel.create({ from: data.from, student_id: data.student_id, class_id: data.class_id });
            return true;
        } catch (error) {
            throw error;
        }

    }

    public deleteRequest = async (request_id: string) => {
        try {
            await this.requestModel.deleteOne({ _id: request_id });
            return true;
        } catch (error) {
            throw error;
        }
    }

    public acceptRequest = async (request_id: string) => {
        try {
            const request = await this.requestModel.findOne({ _id: request_id });
            if (!request) {
                throw new HttpException(400, "Request does not existed");
            }
            const cls = await this.classModel.findOne({ _id: request.class_id });
            if (!cls) {
                throw new HttpException(400, "Class does not existed");
            }
            if (cls.students.includes(request.student_id)) {
                throw new HttpException(400, "Student already in class");
            }
			await this.classModel.findOneAndUpdate(
                { _id: request.class_id },
                { $push: { students: request.student_id } },
                { new: false, useFindAndModify: true })
            await this.requestModel.deleteOne({ _id: request_id });
            return true;
        } catch (error) {
            throw error;
        }
    }

    public getUserRequest = async (user_id: string) => {
        try {
            const request = await this.requestModel.find({ from: user_id });
            return request;
        } catch (error) {
            throw error;
        }
    }
}
