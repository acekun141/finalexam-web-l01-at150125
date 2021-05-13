import { Role } from "./Role";

export type User = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: "male" | "female";
  address: string;
  phoneNumber: string;
  role: Role;
}

export type CreateUser = Pick<User, "username" | "role">
export type Teacher = Pick<User, "firstName" | "lastName" | "dateOfBirth" | "sex" | "phoneNumber" | "address">
export type Student = Pick<User, "firstName" | "lastName" | "dateOfBirth" | "sex" | "phoneNumber" | "address">
export type Parent = Pick<User, "firstName" | "lastName" | "dateOfBirth" | "sex" | "phoneNumber" | "address">
