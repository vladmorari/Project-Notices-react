import React from "react";
import { useHistory } from "react-router-dom";
import * as s from "./style";

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
    fetch(`http://localhost:8000/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        Accept: "application/json", //indicam explicit ce tip de content clientul e capabil sa primeasca
        "Content-Type": "application/json",
      },
    })
      .then((res: any) => {
        console.log("res.....", res.status);
        if (res.status === 200) {
          return res.json();
        }
        return setErrMesage("Invalid credentials");
      })
      .then((data: any) => {
        console.log("data", data);
        if (data !== undefined) {
          localStorage.setItem("token", data.token);
          setIsAuthenticated(true);
          return history.push("/");
        }
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
