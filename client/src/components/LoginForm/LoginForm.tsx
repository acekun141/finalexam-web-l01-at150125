import React, { useCallback, useState } from "react";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { Button, Input } from "../../container/components";
import { loginService } from "../../utils/auth";
import "./login-form.scss";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleUsernameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    const { data, error } = await loginService(username, password);
    if (error) {
      return setError(error);
    }
    if (data?.access_token && data.refresh_token) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("username", username);
    }
    window.location.reload();
  }, [username, password]);

  return (
    <form onSubmit={handleSubmit} className="form login-form" autoComplete="off">
      <p className="form__title">Login</p>
      <Input
        value={username}
        label="Tài khoản"
        onChange={handleUsernameChange}
        inputSize="lg"
      />
      <Input
        value={password}
        label="Mật khẩu"
        type="password"
        onChange={handlePasswordChange}
        inputSize="lg"
      />
      {!!error && <p className="error-message">Tài khoản hoặc mật khẩu không đúng!</p>}
      <Button style={{ justifyContent: "center" }} type="submit" id="login-button">
        Đăng nhập
      </Button>
    </form>
  );
}

export default LoginForm;