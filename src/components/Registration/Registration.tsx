import React from "react";
import * as s from "./styles";
import * as req from "../requests";
import { useHistory } from "react-router-dom";
export const Registration: React.FC<any> = ({setIsAuthenticated}) => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const goToLogin = () => {
    history.push("/login");
  };
  const userNameToState = (e: any) => {
    setUsername(e.target.value);
  };
  const userMailToState = (e: any) => {
    setMail(e.target.value);
  };
  const userPasswordToState = (e: any) => {
    setPassword(e.target.value);
  };
  const onSubmit = () => {
    req
      .createUser(username, mail, password)
      .then((res) => {
        if (res.status === 200) {
          ///nu prea pare ok asa
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
              console.log(err);
            });
            /////////////////////////////////////
        }
      })
      .catch((err) => {
        console.log("ceva nu a mers");
      });
  };
  return (
    <s.Content>
      <s.Field>
        <label>Username </label>
        <input type="text" onChange={userNameToState} />
      </s.Field>
      <s.Field>
        <label>Mail </label>
        <input type="email" onChange={userMailToState} />
      </s.Field>
      <s.Field>
        <label>Password </label>
        <input type="password" onChange={userPasswordToState} />
      </s.Field>
      <s.Field>
        <button onClick={onSubmit}>Registration</button>
        <button onClick={goToLogin}>Cancel</button>
      </s.Field>
    </s.Content>
  );
};
