import { v4 } from "uuid";

import { IClass } from "./class.interface";
import ClassModel from "./class.model";
import { HttpException } from "../_exception";
import UserModel from "../user/user.model";
import UserInfoModel from "../userInfo/userInfo.model";

export default class ClassService {
	private classModel = ClassModel;
	private userModel = UserModel;
	private userInfoModel = UserInfoModel;

	public createClass = async (data: Omit<IClass, "id" | "teacher_id" | "students">) => {
		const classWithName = await this.classModel.findOne({ name: data.name });
		if (classWithName) {
			throw new HttpException(400, `Class ${data.name} existed!`);
		}
		const classId = v4();
		try {
			await this.classModel.create({ id: classId, ...data });
		} catch (error) {
			throw error;
		}
		return true;
	}

	public getInfo = async (classId: string) => {
    const classWithId = await this.classModel
      .findOne({ id: classId })
      .populate("students", "id");
    if (!classWithId) {
      throw new HttpException(400, `Class does not existed!`);
    }
    const { name, open, close, date, teacher_id, id, students } = classWithId;
    const teacher = await this.userInfoModel.findOne({ user_id: teacher_id });
    const studentDetails = await Promise.all(
      students.map(async (item: any) => {
        const userDetail = await this.userInfoModel.findOne({
          user_id: item.id,
        });
        if (!userDetail) {
          return { id: item.id };
        }
        return {
          id: item.id,
          first_name: userDetail.first_name,
          last_name: userDetail.last_name,
        };
      })
    );
    return {
      name,
      open,
      close,
      date,
      teacher: teacher
        ? {
            first_name: teacher.first_name,
            last_name: teacher.last_name,
            id: teacher.id,
          }
        : "",
      id,
      students: studentDetails,
    };
  }

	public addStudent = async (classId: string, studentId: string) => {
		const classWithId = await this.classModel.findOne({ id: classId });
		const userWithId = await this.userModel.findOne({ id: studentId });
		if (!classWithId) {
			throw new HttpException(400, 'Class does not existed!');
		}
		if (!userWithId) {
			throw new HttpException(400, 'Student does not existed!');
		}
		const studentExisted = await classWithId.students.includes(userWithId._id);
		if (studentExisted) {
			throw new HttpException(400, 'Student already in class');
		}
		try {
			await this.classModel.findOneAndUpdate(
        { id: classId },
        { $push: { students: userWithId._id } },
        { new: false, useFindAndModify: true }
      );
		} catch (error) {
			throw error;
		}
		return true;
	}

	public removeStudent = async (classId: string, studentId: string) => {
		const classWithId = await this.classModel.findOne({ id: classId });
		const userWithId = await this.userModel.findOne({ id: studentId });
		if (!classWithId) {
			throw new HttpException(400, 'Class does not existed!');
		}
		if (!userWithId) {
			throw new HttpException(400, 'Student does not existed!');
		}
		const studentExisted = await classWithId.students.includes(userWithId._id);
		if (!studentExisted) {
			throw new HttpException(400, 'Student does not in class');
		}
		try {
			await this.classModel.findOneAndUpdate(
        { id: classId },
        { $pull: { students: userWithId._id } },
				{ multi: true }
      );
		} catch (error) {
			throw error;
		}
		return true;
	}

	public updateTeacher = async (classId: string, teacherId: string) => {
		const classWithId = await this.classModel.findOne({ id: classId });
		const userWithId = await this.userModel.findOne({ id: teacherId });
		if (!classWithId) {
			throw new HttpException(400, 'Class does not existed!');
		}
		if (!userWithId) {
			throw new HttpException(400, 'Teacher does not existed!');
		}
		if (userWithId.role !== "teacher") {
			throw new HttpException(400, 'User is not teacher');
		}
		try {
			classWithId.teacher_id = userWithId.id;
			await classWithId.save()
		} catch (error) {
			throw error;
		}
		return true;
	}
}