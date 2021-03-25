import React from "react";
import { useHistory } from "react-router-dom";
import * as s from "./style";

export const Login: React.FC<any> = ({ setIsAuthenticated }) => {
  // console.log(setIsAuthenticated);
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
    e.preventDefault();
    fetch(`http://localhost:8000/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res: any) => {
      if (res.status === 200) {
        setIsAuthenticated(true);
        return history.push("/");
      }

      setErrMesage("Invalid credentials");
    });
  };

  return (
    <s.Login>
      <h1>Login page</h1>
      <label>
        Username <input type="text" onChange={handeleUsernameChange} />
      </label>
      <br />
      <label>
        Password <input type="password" onChange={handelePasswordChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Log in</button>
      <h3>{errMesage}</h3>
    </s.Login>
  );
};
