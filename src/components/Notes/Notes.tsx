import React, { useEffect } from "react";
import * as s from "./styles";
import { NoticePreview } from "../NoticePreview";
import { actionGetNotes } from "../../actions/notesActions";
import { connect } from "react-redux";

const Notes: React.FC = (props: any) => {
  const { actionGetNotes } = props;

  useEffect(() => {
    actionGetNotes();
  }, []);

  return (
    <s.Notes>
      {!props.notes.data ? (
        <div>Loading</div>
      ) : props.notes.data.length === 0 ? (
        <div>There are no notes... Add one</div>
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
