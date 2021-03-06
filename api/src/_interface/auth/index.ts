import { Request } from "express";
import { User } from "../../user/user.interface";

export type Role = 'student' | 'teacher' | 'parent' | 'admin';

export interface RequestWithUser extends Request {
	user: User;
}

export interface TokenResult {
	accessToken: string;
	refreshToken: string;
}

export interface TokenPayload {
	id: string;
	username: string;
	role: Role;
}