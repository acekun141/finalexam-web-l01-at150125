import mongoose from "mongoose";
import { IClassRelate } from "./parentRelationship.interface";

const schema = new mongoose.Schema({
  class_id: { type: String, required: true },
  student_id: { type: String, required: true }
});

export default mongoose.model<IClassRelate & mongoose.Document>('ParentRelationship', schema);
