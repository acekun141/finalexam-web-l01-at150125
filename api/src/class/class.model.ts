import mongoose from "mongoose";
import { IClass } from "./class.interface";

const classSchema = new mongoose.Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	type: { type: String, required: true, enum: ['A', 'B', 'C', 'D']},
	open: { type: Number, required: true },
	close: { type: Number, required: true },
	date: { type: Number, required: true, enum: [0, 1, 2, 3, 4, 5, 6]},
	teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	students: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export default mongoose.model<IClass & mongoose.Document>("Class", classSchema);
