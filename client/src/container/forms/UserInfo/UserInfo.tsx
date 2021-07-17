import React, { useState, ChangeEvent } from "react";
import moment from "moment/moment";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { updateUserInfoService } from "../../../utils/user/userService";
import { getUserInfoAction } from "../../../redux/reducer/user/actions";
import { Button, Input, Select } from "../../components";
import { useEffect } from "react";
import { useMemo } from "react";

const UserInfo = ({ first_name="", last_name="", sex: sexProps=1, date_of_birth="", action }: any) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  // const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [sex, setSex] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(first_name);
    setLastName(last_name);
    setDateOfBirth(moment(date_of_birth).format("YYYY-MM-DD"));
    setSex(sexProps);
  }, [first_name, last_name, sexProps, date_of_birth]);

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleDOBChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };
  // const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPhoneNumber(event.target.value);
  // };
  const handleSexChange = (value: number) => {
    setSex(value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const body = {
      first_name: firstName,
      last_name: lastName,
      sex: sex,
      date_of_birth: moment(dateOfBirth).format("YYYY-MM-DD")
    }
    if (typeof(action) === "function") {
      action(body);
    }
    // const { error } = await updateUserInfoService(body); 
    // if (error) {
    //   return setError(error);
    // }
    // return dispatch(getUserInfoAction(() => {}));
  };

  const formValid = useMemo(() => {
    return firstName && lastName && dateOfBirth && sex;
  }, [firstName, lastName, dateOfBirth, sex])

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
      {/* <Input
        value={phoneNumber}
        name="phone_number"
        label="Phone number"
        inputSize="lg"
        block={true}
        onChange={handlePhoneNumberChange}
        type="tel"
      /> */}
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
      <Button disabled={!formValid} type="submit" style={{ marginLeft: "auto" }}>Submit</Button>
    </form>
  );
}

export default UserInfo;