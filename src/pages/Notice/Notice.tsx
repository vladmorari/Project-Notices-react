import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as c from "../../components";
import * as s from "./style";
import * as req from "../../components/requests";
import * as M from "../../Modals";
interface Params {
  id: string;
}

export const Notice: React.FC = () => {
  const history = useHistory();
  const params: Params = useParams();
  const [noticeData, setNoticeData] = React.useState({
    title: "",
    content: "",
  });
  const [isEditModalOpen, setEditModalState] = React.useState(false);
  const [isDeleteModalOpen, setDeleteModalState] = React.useState(false);
  const toogleEditModal = () => {
    setEditModalState(!isEditModalOpen);
  };
  const toogleDeliteModal = () => {
    setDeleteModalState(!isDeleteModalOpen);
  };

  const goToNotice = () => {
    history.push("/notices");
  };

  useEffect(() => {
    req
      .getNotice(params.id)
      .then((res) => {
        setNoticeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return Object.keys(noticeData).length === 0 ? (
    <>Loading</>
  ) : (
    <>
      <c.Header />

      <s.Notice>
        <s.Close onClick={goToNotice}>X</s.Close>
        <h3> {`${noticeData.title}`}</h3>
        <h3> {`${noticeData.content}`}</h3>

        <div>
          <button onClick={toogleDeliteModal}>Delete</button>
          <button onClick={toogleEditModal}>Edite</button>
        </div>
        <M.ModalEdit //apelam cmodalul si ii transmitem urmatoarele elemente
          noticeId={params.id}
          notice={noticeData}
          isOpen={isEditModalOpen}
          onClose={toogleEditModal}
        />
        <M.ModalDelete
          noticeId={params.id}
          isOpen={isDeleteModalOpen}
          onClose={toogleDeliteModal}
        />
      </s.Notice>
    </>
  );
};
