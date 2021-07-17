import ClassRelateModel from "./parentRelationship.model";
import { HttpException } from "../_exception";

export default class ClassRelateService {
  private classRelateModel = ClassRelateModel;

  public addRel = async (class_id: string, student_id: string) => {
    try {
      const rel = await this.classRelateModel.findOne({ class_id, student_id });
      if (rel) {
        throw new HttpException(400, "Rel already existed!");
      }
      await this.classRelateModel.create({ class_id, student_id });
      return true;
    } catch (error) {
      throw error;
    }
  };

  public removeRel = async (class_id: string, student_id: string) => {
    try {
      const rel = await this.PRmodel.deleteOne({ class_id, student_id });
      return true;
    } catch (error) {
      throw error;
    }
  };

  public getListStudentWithClass = async (class_id: string) => {
    try {
      const list = await this.classRelateModel.find({ class_id }).populate('student_id');
      return list || [];
    } catch (error) {
      throw error;
    }
  };
}
