export interface IUserInfo {
	username: string;
	id: string;
	role: "admin" | "student" | "parent" | "teacher";
	first_name?: string;
	last_name?: string;
	phone_number?: string;
	date_of_birth?: string;
	sex?: string;
	avatar?: string;
}