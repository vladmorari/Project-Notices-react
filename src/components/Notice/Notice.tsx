import React from "react";
import * as s from "./styles";
interface Props {
  name: string;
}
export const Notice: React.FC<Props> = (prop) => {
  return (
    <s.Notice>
      <h3>Title : {`my first notice ${prop.name}`}</h3>
      <p>Loream ipsum bhjsdjsfvsdh</p>
      <button>Delete</button>
      <button>Edit</button>
    </s.Notice>
  );
};
