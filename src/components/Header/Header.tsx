import React from "react";
import * as s from "./styles";
import { Link } from "react-router-dom";
export const Header: React.FC = () => {
  return (
    <s.Header>
      <s.Nav>
        <s.Li>
          <Link to="/">Home</Link>
        </s.Li>
        <s.Li>
          <Link to="/profile">My profile</Link>{" "}
        </s.Li>
        <s.Li>
          <Link to="/login">Log out</Link>
        </s.Li>
      </s.Nav>
    </s.Header>
  );
};
