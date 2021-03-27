import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.div`
  background-color: gray;
  text-align: center;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;

`;

export const L = styled(Link)`
  color: white;
  list-style-type: none;
  text-decoration: none;
  cursor: pointer;
  background-color: brown;
  margin: 2px;
  padding: 4px;
  border-radius: 6px;
  &:hover {
    background-color: black;
  }
`;
