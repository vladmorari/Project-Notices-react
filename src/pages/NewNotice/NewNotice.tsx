import React, { useState } from "react";
import * as s from "./style";
import * as c from "../../components";
import { useHistory } from "react-router";
import * as req from "../../components/requests";
export const NewNotice: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const goToNotes = () => {
    history.push("/notices");
  };
  const setTitleValue = (e: any) => {
    setTitle(e.target.value);
  };
  const setContentValue = (e: any) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    req
      .addNote(title, content)
      .then((res) => {
        if (res.data !== undefined) {
          return history.push("/notices");
        }
      })
      .catch((err) => {
        console.log("eroare...", err);
      });
  };
  return (
    <>
      <c.Header />
      <s.Content>
        <label>Title:</label>
        <input type="text" onChange={setTitleValue} />
        <label>Content:</label>
        <textarea onChange={setContentValue} />
        <s.ButtonDiv>
          <s.Button onClick={handleSubmit}>Add</s.Button>
          <s.Button onClick={goToNotes}>Cancel</s.Button>
        </s.ButtonDiv>
      </s.Content>
    </>
  );
};
