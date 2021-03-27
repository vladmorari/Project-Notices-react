import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styles";
interface Props {
  notice: any;
}

export const NoticePreview: React.FC<Props> = (prop) => {
  return (
    <Link to={`/notices/${prop.notice._id}`}>
      <s.Notice>
        <h3>Title : {`${prop.notice.title}`}</h3>
        <h3>Content</h3>
        <p>{prop.notice.content}</p>
      </s.Notice>
    </Link>
  );
};
