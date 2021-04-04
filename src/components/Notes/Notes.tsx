import React, { useEffect } from "react";
import * as s from "./styles";
import { NoticePreview } from "../NoticePreview";
import { actionGetNotes } from "../../actions/notesActions";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingAction } from "../../actions/isLoadingActions";

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
        dispatch(isLoadingAction(true))
      ) : notes.length === 0 ? (
        <s.NoNotes>
          {dispatch(isLoadingAction(false))}
          There are no notes... Add one
        </s.NoNotes>
      ) : (
        <div>
          {dispatch(isLoadingAction(false))}
          {notes.map((tag: { _id: number; title: string; content: string }) => (
            <NoticePreview key={tag._id} notice={tag} />
          ))}
        </div>
      )}
    </s.Notes>
  );
};

export default Notes;
