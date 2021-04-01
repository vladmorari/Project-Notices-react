import styled from "styled-components";
import { Link } from "react-router-dom";

export const Notice = styled(Link)`
  box-shadow: 0 0 5px #03e9fe, 0 0 15px #0d0de7, 0 0 5px #03e9f4,
    0 0 10px #03e9f4;
  background-color: rgba(3, 3, 23, 0.7);
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: auto;
  margin-top: 26px;
  margin-bottom: 10px;
  height: fit-content;
  list-style-type: none;
  text-decoration: none;
  color: white;
  font-weight: 600;
  width: 80%;
  padding: 4px;
  border: 2px solid red;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.5s;
  &:hover {
    background-color: rgba(3, 3, 23, 0.9);
    box-shadow: 0 0 5px #03e9fe, 0 0 25px #0d0de7, 0 0 5px #03e9f4,
      0 0 10px #03e9f4;
  }
  &:active {
    background-color: black;
  }
`;
export const Title = styled.h3`
  font-size: 24px;
  color: #24ca00;
`;
export const Content = styled.h3`
  font-size: 24px;
  color: #c38f21;
`;
