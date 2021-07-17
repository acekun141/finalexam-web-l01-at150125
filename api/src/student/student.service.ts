import bcrypt from "bcrypt";

import { User } from "../user/user.interface";
import { IUserInfo } from "../userInfo/userInfo.interface";
import UserModel from "../user/user.model";
import UserInfoModel from "../userInfo/userInfo.model";
import RelationshipModel from "../relationship/relationship.model";
import { HttpException, UserWithUsernameAlreadyExisted } from "../_exception";
import { v4 } from "uuid";
import { nextTick } from "process";


export default class StudentService {
  private userModel = UserModel;
  private userInfoModel = UserInfoModel;
  private relationshipModel = RelationshipModel;

  public createStudent = async (
    data: Omit<IUserInfo, "avatar"> & Omit<User, "id" | "role">,
    user: User
  ) => {
    const userWithUsername = await this.userModel.findOne({
      username: data.username,
    });
    if (userWithUsername) {
      throw new UserWithUsernameAlreadyExisted(data.username);
    }
    const id = v4();
    try {
      const { username, first_name, last_name, sex, date_of_birth } = data;
      const password = await bcrypt.hash(data.password, 10);
      const student = await this.userModel.create({
        username,
        password,
        role: "student",
        id,
      });
      await this.userInfoModel.create({
        user_id: id,
        first_name,
        last_name,
        sex,
        date_of_birth,
      });
      const relationship = this.relationshipModel.findOne({
        parent_id: user.id,
      });
      if (!relationship) {
        await this.relationshipModel.create({ parent_id: user.id });
      }
      await this.relationshipModel.updateOne(
        { parent_id: user.id },
        { $push: { children: student._id } },
        { new: false, useFindAndModify: true }
      );
    } catch (error) {
      await this.userModel.deleteOne({ id });
      await this.userInfoModel.deleteOne({ user_id: id });
      throw error;
    }
    return true;
  };

  public updateStudent = async (
    student_id: string,
		parent_id: string,
		user: User,
    data: {
      first_name: string,
      last_name: string,
      sex: number,
      date_of_birth: string,
    }
  ) => {
		try {
			if (user.role === "parent" && user.id !== parent_id) {
				throw new HttpException(403, "");
			}
			const relationship = await this.relationshipModel.findOne({ parent_id: parent_id });
			const student = await this.userModel.findOne({ id: student_id });
			if (relationship.children.includes(student._id)) {
				const { first_name, last_name, sex, date_of_birth } = data;
				await this.userInfoModel.updateOne({ user_id: student_id }, { $set: { first_name, last_name, sex, date_of_birth } });
			};
		} catch(error) {
			throw error;
		}
		return true;
	};

  public removeStudent = async (student_id: string, parent_id: string) => {
    try {
      const user = await this.userModel.findOne({ id: student_id });
      await this.userModel.deleteOne({ id: student_id });
      await this.userInfoModel.deleteOne({ user_id: student_id });
      await this.relationshipModel.findOneAndUpdate(
        { parent_id: parent_id },
        { $pull: { children: user._id } },
        { multi: true }
      );
    } catch (error) {
      throw error;
    }
    return true;
  };

  public getListChildrenWithParent = async (parent_id: string) => {
    try {
      const relationship = await this.relationshipModel
        .findOne({ parent_id })
        .populate("children", "id");
      console.log(relationship);
      const listChildren = await Promise.all(
        relationship.children.map(async (item: any) => {
          const childrenInfo = await this.userInfoModel.findOne({
            user_id: item.id,
          });
          return {
            first_name: childrenInfo.first_name,
            last_name: childrenInfo.last_name,
            id: childrenInfo.user_id,
            sex: childrenInfo.sex,
            date_of_birth: childrenInfo.date_of_birth,
          };
        })
      );
      return listChildren;
    } catch (error) {
      throw error;
    }
  };
}