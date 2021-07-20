import mongoose from "mongoose";
import { IRequest } from "./request.interface";

const requestSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

export default mongoose.model<IRequest & mongoose.Document>('Request', requestSchema);