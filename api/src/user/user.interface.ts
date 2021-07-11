import { Role } from "../_interface";

export interface User {
	id: string;
	username: string;
	password: string;
	role: Role;
}