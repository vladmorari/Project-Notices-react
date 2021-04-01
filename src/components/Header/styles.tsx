import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: rgb(2, 3, 4);
  background: linear-gradient(
    180deg,
    rgba(2, 3, 4, 0.6474964985994398) 10%,
    rgba(168, 168, 168, 0) 88%
  );
  height: 46px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

export const L = styled(Link)`
  color: #130075f2;
  height: 50%;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  font-weight: 600;
  list-style-type: none;
  text-decoration: none;
  cursor: pointer;
  margin: 2px;
  padding: 4px;
  border-radius: 6px;
  &:hover {
    border: 1px rgba(0, 0, 0, 0.2) solid;
    text-shadow: 5px 1px 10px rgba(0, 24, 66, 1);
    color: #dab110;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
