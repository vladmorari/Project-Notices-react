import React from "react";
import * as s from "./styles";
export const Header: React.FC = () => {
  return (
    <s.Header>
      <s.Nav>
        <s.L to="/">My profile</s.L>
        <s.L to="/notices">My Notices</s.L>
        <s.L to="/logout">Log out</s.L>
      </s.Nav>
    </s.Header>
  );
};
