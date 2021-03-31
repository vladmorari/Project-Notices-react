import React from "react";
import { useHistory } from "react-router-dom";
import * as s from "./style";
import * as req from "../../components/requests";

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
      <h1>Login page</h1>
      <label>Username</label>
      <input type="text" onChange={handeleUsernameChange} />

      <label>Password</label>
      <input type="password" onChange={handelePasswordChange} />
      <br />
      <button onClick={handleSubmit}>Log in</button>
      <button onClick={goToRegistration}>Registration</button>
      <h3>{errMesage}</h3>
    </s.Login>
  );
};
