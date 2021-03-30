import React from "react";
import * as c from "../../components";
import * as s from "./style";
export const Profile: React.FC = () => {
  const userName: string = localStorage.getItem("userName") || "";
  return (
    <s.Profile>
      <c.Header />
      <h3>My profile</h3>
      <h2>{`Hello ${userName}`}</h2>
    </s.Profile>
  );
};
