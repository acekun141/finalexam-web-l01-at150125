import React, { useState, ChangeEvent } from "react";
import moment from "moment/moment";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { updateUserInfoService } from "../../../utils/user/userService";
import { getUserInfoAction } from "../../../redux/reducer/user/actions";
import { Button, Input, Select } from "../../components";

const UserInfo = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [sex, setSex] = useState<string>("male");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleDOBChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };
  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };
  const handleSexChange = (value: string) => {
    setSex(value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const body = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      sex: sex,
      date_of_birth: moment(dateOfBirth).format("YYYY-MM-DD")
    }
    const { error } = await updateUserInfoService(body); 
    if (error) {
      return setError(error);
    }
    return dispatch(getUserInfoAction(() => {}));
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
        value={phoneNumber}
        name="phone_number"
        label="Phone number"
        inputSize="lg"
        block={true}
        onChange={handlePhoneNumberChange}
        type="tel"
      />
      <Select
        value={sex}
        name="sex"
        option={[
          { text: "Male", value: "male", checked: false },
          { text: "Female", value: "female", checked: false },
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

export default UserInfo;