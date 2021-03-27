import React, { useEffect } from "react";
import * as s from "./styles";
import { NoticePreview } from "../NoticePreview";
export const Notes: React.FC = () => {
  const [notes, setnotes] = React.useState([]);
  useEffect(() => {
    const token: any = localStorage.getItem("token");
    fetch(`http://localhost:8000/notices`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setnotes(data);
      })
      .catch(console.error);
  }, []);

  return (
    <s.Notes>
      {notes.length < 1 ? (
        <div>Loading</div>
      ) : (
        <div>
          {notes.map((tag: any) => (
            <NoticePreview key={tag._id} notice={tag} />
          ))}
        </div>
      )}
    </s.Notes>
  );
};
