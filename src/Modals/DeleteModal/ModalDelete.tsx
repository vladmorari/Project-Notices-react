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
        <s.Warning>Are you sure you want to delete this note ?</s.Warning>
        <s.BoxButton>
          <s.ButtonYes onClick={yesButton}>Yes</s.ButtonYes>
          <s.ButtonNo onClick={onClose}>No</s.ButtonNo>
        </s.BoxButton>
      </s.Content>
    </s.Modal>
  ) : null;
};
