import mongoose from "mongoose";
import { ILesson } from "./lesson.interface";

const lessonSchema = new mongoose.Schema({
	class_id: { type: String, required: true },
	name: { type: String, required: true },
	date: { type: Date, required: true },
	absent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	note: { type: String, default: "" },
	id: { type: String, required: true }
});

export default mongoose.model<ILesson & mongoose.Document>('Lesson', lessonSchema);