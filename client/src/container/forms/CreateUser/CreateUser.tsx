import React from "react";
import { Button, Input, Select } from "../../components";

const role = [
  { text: "Admin", value: "admin", checked: false },
  { text: "Teacher", value: "teacher", checked: false },
  { text: "Student", value: "student", checked: false },
  { text: "Parent", value: "parent", checked: false },
];

const CreateUser = () => {
	return (
		<div className="create-user">
			<Input block={true} name="username" label="Username" inputSize="lg" />
			<Input block={true} name="password" label="Password" inputSize="lg" />
			<Select option={role} onChange={(value) => console.log(value)} label="role" outline={true} />
			<Button style={{ marginLeft: "auto" }}>Create</Button>
		</div>
	);
}

export default CreateUser;