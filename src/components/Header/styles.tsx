import styled from "styled-components";

export const Header = styled.div`
  background-color: gray;
  text-align: center;
  height: 30px;
  padding-top: 5px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const Li = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 2px;
  color: white;
  border-radius: 6px;
  &:hover{
    background-color: black;
  }
`;
