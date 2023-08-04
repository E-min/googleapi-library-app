import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import {
  LoginForm,
  StyledInput,
  StyledSubmitButton,
  InputItem,
  PageContainer
} from "../formItems.style";

const Login = () => {
  const [loginInfos, setLoginInfos] = useState({
    email: "",
    password: "",
  });
  const { logIn } = useAuthContext();

  const handleChange = (e) => {
    const { type, value } = e.target;
    setLoginInfos({ ...loginInfos, [type]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    logIn(loginInfos.email, loginInfos.password);
    setLoginInfos({
      email: "",
      password: "",
    });
  };

  return (
    <PageContainer data-flex={"center flex-start"}>
      <LoginForm onSubmit={handleLogin} data-flex={"center  column 1rem"}>
        <InputItem>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            id="email"
            value={loginInfos.email}
            onChange={handleChange}
            placeholder="..."
          />
        </InputItem>
        <InputItem>
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            id="password"
            value={loginInfos.password}
            onChange={handleChange}
            placeholder="..."
          />
        </InputItem>
        <StyledSubmitButton type="submit">Log in</StyledSubmitButton>
      </LoginForm>
    </PageContainer>
  );
};

export default Login;
