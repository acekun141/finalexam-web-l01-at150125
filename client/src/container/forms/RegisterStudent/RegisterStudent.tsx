import React, { useState, ChangeEvent } from "react";
import moment from "moment/moment";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { Button, Input, Select } from "../../components";
import { createStudentService } from "../../../utils/student";
import { useCallback } from "react";

interface IProps {
	successCallback?: any;
}

const RegisterStudent: React.FC<IProps> = (props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [sex, setSex] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleDOBChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSexChange = (value: number) => {
    setSex(value);
  };
	const clearForm = useCallback(() => {
		setFirstName("");
		setLastName("");
		setDateOfBirth("");
		setSex(1);
		setUsername("");
		setPassword("")
	}, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const body = {
      first_name: firstName,
      last_name: lastName,
			username,
			password,
      sex: sex,
      date_of_birth: moment(dateOfBirth).format("YYYY-MM-DD")
    }
    const { error } = await createStudentService(body); 
    if (error) {
      return setError(error);
    }
		setError("");
		if (typeof(props.successCallback) === "function") {
			props.successCallback();
		}
		clearForm();
  };

	return (
    <form className="user-info" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col">
          <Input
            value={firstName}
            name="first_name"
            label="First name"
            inputSize="lg"
            block={true}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="col">
          <Input
            value={lastName}
            name="last_name"
            label="Last name"
            inputSize="lg"
            block={true}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
      <Input
        value={dateOfBirth}
        name="date_of_birth"
        type="date"
        label="Date of birth"
        inputSize="lg"
        block={true}
        onChange={handleDOBChange}
      />
      <Input
        value={username}
        name="username"
        label="Username"
        inputSize="lg"
        block={true}
        onChange={handleUsernameChange}
        type="text"
      />
      <Input
        value={password}
        name="password"
        label="Password"
        inputSize="lg"
        block={true}
        onChange={handlePasswordChange}
        type="password"
      />
      <Select
        value={sex}
        name="sex"
        option={[
          { text: "Male", value: 1, checked: false },
          { text: "Female", value: 0, checked: false },
        ]}
        label="Sex"
        onChange={handleSexChange}
        outline={true}
      />
      {!!error && <p className="error-message">{error}</p>}
      <Button type="submit" style={{ marginLeft: "auto" }}>Submit</Button>
    </form>
  );
}

export default RegisterStudent;