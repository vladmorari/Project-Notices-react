import styled from "styled-components";
import { Link } from "react-router-dom";
export const Content = styled.div`
  height: 100vh;

`;
export const L = styled(Link)`
  display: flex;
  margin-top: 16px;
  height: fit-content;
  list-style-type: none;
  text-decoration: none;
  color: black;
  width: fit-content;
  padding: 4px;
  border: 2px solid black;
  margin-left: 2%;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: green;
  }
  &:active {
    background-color: greenyellow;
  }
`;
