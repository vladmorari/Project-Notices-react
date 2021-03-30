import React, { useEffect } from "react";
import * as s from "./styles";
import { NoticePreview } from "../NoticePreview";
import * as req from "../../components/requests";

export const Notes: React.FC = () => {
  const [notes, setnotes] = React.useState([]);

  useEffect(() => {
    req
      .getNotices()
      .then((res) => {
        setnotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <s.Notes>
      {notes.length < 1 ? (
        <div>Not notice yet, you can add one !</div>
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
