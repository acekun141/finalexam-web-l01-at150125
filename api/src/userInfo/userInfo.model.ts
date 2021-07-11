import mongoose from "mongoose";
import { IUserInfo } from "./userInfo.interface";

const userInfoSchema = new mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	phone_number: { type: String, required: true },
	date_of_birth: { type: Date, required: true },
	avatar: { type: String, required: false, default: "" },
	user_id: { type: String, ref: 'User.id' },
	sex: { type: String, enum: ["male", "female"]}
});

export default mongoose.model<IUserInfo & mongoose.Document>('UserInfo', userInfoSchema);