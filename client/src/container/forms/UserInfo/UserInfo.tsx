import React from "react";
import { Button, Input, Select } from "../../components";

const UserInfo = () => {
	return (
    <div className="user-info">
      <div className="form-row">
        <div className="col">
          <Input label="First name" inputSize="lg" block={true} />
        </div>
        <div className="col">
          <Input label="Last name" inputSize="lg" block={true} />
        </div>
      </div>
      <Input label="Date of birth" inputSize="lg" block={true} />
      <Input label="Phone number" inputSize="lg" block={true} />
      <Select
        option={[
          { text: "Male", value: "male", checked: false },
          { text: "Female", value: "female", checked: false },
        ]}
				label="Sex"
				onChange={(value) => console.log(value)}
				outline={true}
      />
      <Button style={{ marginLeft: "auto" }}>Submit</Button>
    </div>
  );
}

export default UserInfo;