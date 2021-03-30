import React from "react";
import * as s from "./style";
import * as c from "../../components";
export const MyNotices: React.FC = () => {
  return (
    <>
      <c.Header />
      <s.Content>
        <s.L to={`/createNote`}>Create new note</s.L>
        <c.Notes />
      </s.Content>
    </>
  );
};
