import UserModel from "./user.model";
import UserInfoModel from "../userInfo/userInfo.model";

export default class UserService {
	private userModel = UserModel;
	private userInfoModel = UserInfoModel;	

	public async getUserInfo(id: string) {
		const user = await this.userModel.findOne({ id });
		const userInfo = await this.userInfoModel.findOne({ user_id: id });
		if (userInfo) {
			return {
				_id: user._id,
				id: user.id,
				username: user.username,
				role: user.role,
				first_name: userInfo.first_name,
				last_name: userInfo.last_name,
				phone_number: userInfo.phone_number,
				date_of_birth: userInfo.date_of_birth,
				sex: userInfo.sex
			};
		}
		return {
			_id: user._id,
			id: user.id,
			username: user.username,
			role: user.role,
		}
	}
}