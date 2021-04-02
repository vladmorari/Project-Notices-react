import React, { useEffect } from "react";
import * as s from "./styles";
import { NoticePreview } from "../NoticePreview";
import { actionGetNotes } from "../../actions/notesActions";
import { useDispatch, useSelector } from "react-redux";
const Notes: React.FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: any) => state.notes.notes.data);

  useEffect(() => {
    dispatch(actionGetNotes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <s.Notes>
      {!notes ? (
        <div>Loading</div>
      ) : notes.length === 0 ? (
        <div>There are no notes... Add one</div>
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

export default Notes;
