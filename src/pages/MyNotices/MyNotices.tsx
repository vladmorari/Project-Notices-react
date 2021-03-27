import React from "react";
import * as s from "./style";
import * as c from "../../components";
export const MyNotices: React.FC = () => {
  return (
    <>
      <c.Header />
      <s.Content>
        <s.Create>Create new note</s.Create>
        <c.Notes />
      </s.Content>
    </>
  );
};
