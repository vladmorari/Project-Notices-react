import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as c from "../../components";
import * as s from "./style";
import * as req from "../../components/requests";

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

  const goToNotice = () => {
    history.push("/notices");
  };
  
  const deleteNote = (e: any) => {
    e.preventDefault();
    req
      .deleteNotice(params.id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <button onClick={deleteNote}>Delete</button>
          <button>Edite</button>
        </div>
      </s.Notice>
    </>
  );
};
