import React from "react";
import * as s from "./style";
import * as c from "../../components";
export const Home: React.FC = () => {
  return (
    <s.Home>
      <c.Header />
      <c.Notes />
    </s.Home>
  );
};
