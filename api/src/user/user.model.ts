import mongoose from "mongoose";
import { User } from "./user.interface";

const userSchema = new mongoose.Schema({
	id: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, default: 'student' }
});

export default mongoose.model<User & mongoose.Document>('User', userSchema);