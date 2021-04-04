import React from "react";
import * as s from "./styles";

export const NoticePreview: React.FC<any> = (prop) => {
  return (
    <s.Notice to={`/notices/${prop.notice._id}`}>
      <s.Title>{`${prop.notice.title}`}</s.Title>
      <s.Content>{prop.notice.content}</s.Content>
    </s.Notice>
  );
};
