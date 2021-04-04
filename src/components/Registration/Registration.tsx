import React, { useEffect } from "react";
import * as s from "./styles";
import * as req from "../requests";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoadingAction } from "../../actions/isLoadingActions";

export const Registration: React.FC<any> = ({ setIsAuthenticated }) => {
  const history = useHistory();

  const [username, setUsername] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disableButton, setDisableButton] = React.useState(true);
  const dispatch = useDispatch();

  const goToLogin = () => {
    history.push("/login");
  };
  const userNameToState = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(e.target.value);
  };
  const userMailToState = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMail(e.target.value);
  };
  const userPasswordToState = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  const onSubmit = () => {
    dispatch(isLoadingAction(true));
    req
      .createUser(username, mail, password)
      .then((res) => {
        if (res.status === 200) {
          req
            .logIn(username, password)
            .then((res) => {
              if (res.data !== undefined) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userName", res.data.user);
                setIsAuthenticated(true);
                dispatch(isLoadingAction(false));
                return history.push("/");
              }
            })
            .catch((err) => {
              console.log(err);
              dispatch(isLoadingAction(false));
            });
        }
      })
      .catch((err) => {
        dispatch(isLoadingAction(false));
        console.log("err", err);
      });
  };

  useEffect(() => {
    if (
      username.length > 4 &&
      mail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
      password.length > 4
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [mail, username, password]);

  return (
    <s.Content>
      <s.Box>
        <s.Label>Username </s.Label>
        <s.Input
          type="text"
          onChange={userNameToState}
          placeholder={"more 4 characters"}
        />
      </s.Box>
      <s.Box>
        <s.Label>Mail </s.Label>
        <s.Input
          type="email"
          onChange={userMailToState}
          placeholder={"example@mail.com"}
        />
      </s.Box>
      <s.Box>
        <s.Label>Password </s.Label>
        <s.Input
          type="password"
          onChange={userPasswordToState}
          placeholder={"more 4 characters"}
        />
      </s.Box>
      <s.BoxButton>
        <s.Button onClick={onSubmit} disabled={disableButton}>
          Registration
        </s.Button>
        <s.Button onClick={goToLogin}>Cancel</s.Button>
      </s.BoxButton>
    </s.Content>
  );
};
