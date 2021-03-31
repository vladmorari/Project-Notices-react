import React, { useEffect } from "react";
import * as s from "./styles";
import { NoticePreview } from "../NoticePreview";
import { actionGetNotes } from "../../actions/notesActions";
import { connect } from "react-redux";

const Notes: React.FC = (props: any) => {
  const { actionGetNotes } = props;
  useEffect(() => {
    actionGetNotes();
  }, [actionGetNotes]);

  return (
    <s.Notes>
      {!Array.isArray(props.notes.data) ? (
        <div>Not notice yet, you can add one !</div>
      ) : (
        <div>
          {props.notes.data.map((tag: any) => (
            <NoticePreview key={tag._id} notice={tag} />
          ))}
        </div>
      )}
    </s.Notes>
  );
};
const mapStateToProps = (state: any) => {
  return {
    notes: state.notes.notes,
  };
};
const mapDispatchToProps = {
  actionGetNotes,
};
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
