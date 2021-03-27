import React from "react";
import * as s from "./styles";
import * as c from "../../components";
import { useHistory } from "react-router-dom";
export const LogOut: React.FC = () => {
  const history = useHistory();
  const noButton = () => {
    return history.push("/");
  };
  const yesButton = () => {
    fetch(`http://localhost:8000/logout`, {
      method: "get",
    })
      .then((res) => {
        localStorage.removeItem("token");
        return history.push("/login");
      })
      .catch(console.error);
  };
  return (
    <s.LogOut>
      <c.Header />
      <h3>Are you sure you want to Log Out ?</h3>
      <button onClick={yesButton}>Yes</button>
      <button onClick={noButton}>No</button>
    </s.LogOut>
  );
};
