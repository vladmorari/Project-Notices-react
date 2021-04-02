import React from "react";
import * as s from "./styles";
import * as c from "../../components";
import { useHistory } from "react-router-dom";
import * as req from "../../components/requests";

export const LogOut: React.FC<any> = ({ setIsAuthenticated }) => {
  const history = useHistory();
  const noButton = () => {
    return history.push("/");
  };
  const yesButton = () => {
    req
      .logOut()
      .then(() => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        return history.push("/login");
      })
      .catch(console.error);
  };
  return (
    <>
     
      <c.Header />
      <s.LogOut>
        <s.Box>
          <h3>Are you sure you want to Log Out ?</h3>
          <s.Button onClick={yesButton}>Yes</s.Button>
          <s.Button onClick={noButton}>No</s.Button>
        </s.Box>
      </s.LogOut>
    </>
  );
};
