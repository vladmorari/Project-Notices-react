import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styles";
interface Props {
  notice: any;
}

export const NoticePreview: React.FC<Props> = (prop) => {
  return (
    <s.Notice to={`/notices/${prop.notice._id}`}>
      <s.Title>{`${prop.notice.title}`}</s.Title>
      <s.Content>{prop.notice.content}</s.Content>
    </s.Notice>
  );
};
