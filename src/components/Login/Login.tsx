import React from "react";
import { useHistory } from "react-router-dom";
import * as s from "./style";
import * as req from "../requests";

export const Login: React.FC<any> = ({ setIsAuthenticated }) => {
  const history = useHistory();
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errMesage, setErrMesage] = React.useState("");

  const handeleUsernameChange = (e: any) => {
    setUserName(e.target.value);
  };
  const handelePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    setErrMesage("");
    e.preventDefault();
    req
      .logIn(username, password)
      .then((res) => {
        if (res.data !== undefined) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.user);
          setIsAuthenticated(true);
          return history.push("/");
        }
      })
      .catch((err) => {
        setErrMesage("Invalid credentials");
      });
  };
  const goToRegistration = () => {
    return history.push("/registration");
  };

  return (
    <s.Login>
      <s.LoginTitle>Login page</s.LoginTitle>
      <s.Box>
        <s.Label>Username</s.Label>
        <s.Input type="text" onChange={handeleUsernameChange}/>
      </s.Box>
      <s.Box>
        <s.Label>Password</s.Label>
        <s.Input type="password" onChange={handelePasswordChange} />
      </s.Box>
      <s.BoxButtons>
        <s.Button onClick={handleSubmit}>Log in</s.Button>
        <s.Button onClick={goToRegistration}>Registration</s.Button>
      </s.BoxButtons>
      <s.ErrorMesage>{errMesage} </s.ErrorMesage>
    </s.Login>
  );
};