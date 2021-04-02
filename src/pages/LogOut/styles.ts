import styled from "styled-components";

export const LogOut = styled.div`
  display: flex;
  height: 100vh;
  justify-content: flex-start;
`;
export const Box = styled.div`
  text-align: center;
  border-radius: 6px;
  width: 400px;
  margin: 60px auto;
  height: 100px;
  padding: 18px;
  background-color: rgba(196, 196, 196, 0.4);
  transition: 0.5s;
  &:hover {
    background-color: rgba(186, 186, 186, 0.9);
  }
`;
export const Button = styled.button`
  margin: 6px 20px;
  width: 80px;
  cursor: pointer;
`;
