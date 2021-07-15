import { HttpException } from "../_exception";
import { v4 } from "uuid";
import ClassModel from "../class/class.model";
import { ILesson } from "./lesson.interface";
import LessonModel from "./lesson.model";
import { User } from "../user/user.interface";

export default class LessonService {
  private lessonModel = LessonModel;
  private classModel = ClassModel;

  public createLesson = async (
    classId: string,
    data: Omit<ILesson, "id" | "class_id" | "absent" | "note">
  ) => {
    const classWithId = await this.classModel.findOne({ id: classId });
    if (!classWithId) {
      throw new HttpException(400, "Class does not existed!");
    }
    const lessonId = v4();
    try {
      await this.lessonModel.create({
        id: lessonId,
        ...data,
        class_id: classId,
      });
    } catch (error) {
      throw error;
    }
    return true;
  };

  public updateLesson = async (
    data: { lesson_id: string; name: string; note: string; date: string },
    user: User
  ) => {
    const lesson = await this.lessonModel.findOne({ id: data.lesson_id });
    if (!lesson) {
      throw new HttpException(400, "Lesson does not existed");
    }
    const classWithLesson = await this.classModel.findOne({
      id: lesson.class_id,
    });
    if (classWithLesson.teacher_id !== user.id && user.role === "teacher") {
      throw new HttpException(400, "You cannot update this lesson");
    }
    try {
      await this.lessonModel.updateOne(
        { id: data.lesson_id },
        { $set: { name: data.name, note: data.note, date: data.date } }
      );
    } catch (error) {
      throw error;
    }
    return true;
  };

  public removeLesson = async (lessonId: string, user: User) => {
    const lesson = await this.lessonModel.findOne({ id: lessonId });
    if (!lesson) {
      throw new HttpException(400, "Lesson does not existed");
    }
    const classWithLesson = await this.classModel.findOne({
      id: lesson.class_id,
    });
    if (classWithLesson.teacher_id !== user.id && user.role === "teacher") {
      throw new HttpException(400, "You cannot delete this lesson");
    }
    try {
      await this.lessonModel.deleteOne({ id: lessonId });
    } catch (error) {
      throw error;
    }
    return true;
  };

  public updateAbsent = async (lessonId: string, list: string[]) => {
    const lesson = await this.lessonModel.findOne({ id: lessonId });
    if (!lesson) {
      throw new HttpException(400, "Lesson does not existed!");
    }
    try {
      lesson.absent = list;
      await lesson.save();
    } catch (error) {
      throw error;
    }
    return true;
  };
}