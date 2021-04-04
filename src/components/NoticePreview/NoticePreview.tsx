import React from "react";
import * as s from "./styles";
interface Props {
  notice: { _id: number, title: string; content: string };
}
export const NoticePreview: React.FC<Props> = (notice) => {
  return (
    <s.Notice to={`/notices/${notice.notice._id}`}>
      <s.Title>{`${notice.notice.title}`}</s.Title>
      <s.Content>{notice.notice.content}</s.Content>
    </s.Notice>
  );
};
