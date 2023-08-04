import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import {
  InputItem,
  LoginForm,
  PageContainer,
  StyledInput,
  StyledSubmitButton,
} from "../formItems.style";

const Register = () => {
  const [registerInfos, setRegisterInfos] = useState({
    // username: "",
    email: "",
    password: "",
  });
  const { register } = useAuthContext();

  const handleChange = (e) => {
    const { type, value } = e.target;
    setRegisterInfos({ ...registerInfos, [type]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    const { email, password } = registerInfos;
    register( email, password);
    setRegisterInfos({
      // username: "",
      email: "",
      password: "",
    });
  };

  return (
    <PageContainer data-flex={"center flex-start"}>
      <LoginForm onSubmit={handleRegister} data-flex={"center  column 1rem"}>
        {/* <InputItem>
          <label htmlFor="username">Username</label>
          <StyledInput
            type="username"
            id="username"
            value={registerInfos.username}
            onChange={handleChange}
            placeholder="..."
          />
        </InputItem> */}
        <InputItem>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            id="email"
            value={registerInfos.email}
            onChange={handleChange}
            placeholder="..."
          />
        </InputItem>
        <InputItem>
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            id="password"
            value={registerInfos.password}
            onChange={handleChange}
            placeholder="..."
          />
        </InputItem>
        <StyledSubmitButton type="submit">Register</StyledSubmitButton>
      </LoginForm>
    </PageContainer>
  );
};

export default Register;
