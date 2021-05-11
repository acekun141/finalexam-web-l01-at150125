import React, { useCallback, useState } from "react";
import { FormEvent } from "react";
import { Button, Input, Checkbox } from "../../container/components";
import "./login-form.scss";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(prevState => !prevState);
  }, []);

  const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="form login-form shadow-0">
      <p className="form__title">Login</p>
      <Input label="Username" />
      <Input label="Password" type={showPassword ? "text" : "password"} />
      <Checkbox onChange={handleShowPassword} label="Show password" />
      <br />
      <Button>Login</Button>
    </form>
  )
}

export default LoginForm;