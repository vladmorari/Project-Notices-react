import React, { useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";
import * as c from "../../components";
import * as s from "./style";
interface Params {
  id: string;
}
export const Notice: React.FC = () => {
  const history = useHistory();
  const [noticeData, setNoticeData] = React.useState({
    title: "",
    content: "",
  });

  const goToNotice=()=>{
    history.push("/notices")
  }
  const params: Params = useParams();
  useEffect(() => {
    const token: any = localStorage.getItem("token");
    fetch(`http://localhost:8000/notices/${params.id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNoticeData(data);
      })
      .catch(console.error);
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
          <button>Delete</button>
          <button>Edite</button>
        </div>
      </s.Notice>
    </>
  );
};
