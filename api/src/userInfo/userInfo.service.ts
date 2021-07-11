import { IUserInfo } from "./userInfo.interface";
import UserInfoModel from "./userInfo.model";

export default class UserInfoService {
	private UserInfo = UserInfoModel;

	public async createOrUpdate(user_id: string, data: Omit<IUserInfo, "avatar">) {
		try {
			const userInfo = await this.UserInfo.findOne({ user_id });
			console.log(userInfo);
			if (userInfo) {
				await this.UserInfo.updateOne({ user_id }, { ... data });
			} else {
				await this.UserInfo.create({ user_id, ...data });
			}
		} catch (error) {
			throw error;
		}
	}

	public async test() {
	}
}
