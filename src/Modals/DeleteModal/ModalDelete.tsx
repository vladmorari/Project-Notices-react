import React from "react";
import * as s from "./style";
import * as req from "../../components/requests";
import { useHistory } from "react-router-dom";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  noticeId: string;
}
export const ModalDelete: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  noticeId,
}) => {
  const history = useHistory();
  const yesButton = (e: any) => {
    e.preventDefault();
    req
      .deleteNotice(noticeId)
      .then((res) => {
        if (res.status === 201) {
          history.push("/notices");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return isOpen ? (
    <s.Modal>
      <s.Content>
        <h1>Are you sure want to delete this notice ?</h1>
        <button onClick={yesButton}>yes</button>
        <button onClick={onClose}>No</button>
      </s.Content>
    </s.Modal>
  ) : null;
};
