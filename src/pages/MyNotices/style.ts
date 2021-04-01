import styled from "styled-components";
import { Link } from "react-router-dom";
export const Content = styled.div`
  height: 90vh;
`;
export const L = styled(Link)`
  box-shadow: 0 0 5px #03e9fe, 0 0 15px #0d0de7, 0 0 5px #03e9f4,
    0 0 10px #03e9f4;
  background-color: rgba(3, 3, 23, 0.5);
  display: flex;
  margin-top: 16px;
  height: fit-content;
  list-style-type: none;
  text-decoration: none;
  color: white;
  font-weight: 600;
  width: fit-content;
  padding: 4px;
  border: 2px solid red;
  margin-left: 2%;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.5s;
  &:hover {
    background-color: rgba(3, 3, 23, 0.7);
    box-shadow: 0 0 5px #03e9fe, 0 0 25px #0d0de7, 0 0 5px #03e9f4,
      0 0 10px #03e9f4;
  }
  &:active {
    background-color: black;
  }
`;
