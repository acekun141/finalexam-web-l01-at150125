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
    <form onSubmit={handleSubmit} className="form login-form">
      <p className="form__title">Login</p>
      <Input label="Tài khoản" />
      <Input label="Mật khẩu" type={showPassword ? "text" : "password"} />
      <Checkbox onChange={handleShowPassword} label="Hiển thị mật khẩu" />
      <Button type="submit" id="login-button">Đăng nhập</Button>
    </form>
  )
}

export default LoginForm;