import React, { useEffect } from "react";
import * as s from "./style";
import * as req from "../../components/requests";
import { useHistory } from "react-router-dom";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  notice: { title: string; content: string };
  noticeId: string;
}
export const ModalEdit: React.FC<ModalProps> = ({
  notice,
  isOpen,
  onClose,
  noticeId,
}) => {
  const history = useHistory();
  const [titleState, setTitleState] = React.useState(notice.title);
  const [contentState, setContentState] = React.useState(notice.content);

  useEffect(() => {
    setTitleState(notice.title);
    setContentState(notice.content);
  }, [notice.content, notice.title]);

  const changeTitle = (e: { target: { value: string } }) => {
    setTitleState(e.target.value);
  };

  const changeContent = (e: { target: { value: string } }) => {
    setContentState(e.target.value);
  };
  const onApply = () => {
    req
      .updateNote(noticeId, titleState, contentState)
      .then((res) => {
        if (res.status === 201) {
          return history.push("/notices");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return isOpen ? (
    <s.Modal>
      <s.Content>
        <h4>Edit note</h4>
        <label>Title:</label>
        <input  value={titleState} onChange={changeTitle} />
        <label>Content:</label>
        <textarea  value={contentState} onChange={changeContent} />
        <button onClick={onClose}>Cancel</button>
        <button onClick={onApply}>Apply</button>
      </s.Content>
    </s.Modal>
  ) : null;
};
