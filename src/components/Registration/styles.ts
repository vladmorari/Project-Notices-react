import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin: auto;
  margin-top: 16px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.30);
  }
`;
export const Box = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  margin: 2px;
`;
export const Label = styled.label`
  width: 80%;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: flex-start;

  padding: 4px;
  margin: 2px;
`;
export const Input = styled.input`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  padding: 4px;
  margin: 2px;
  background-color: transparent;
`;
export const BoxButton = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 4px;
  margin: 18px;
`;
export const Button = styled.button`
  width: 100px;
  height: 24px;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  border: 1px solid black;
  background: transparent;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.26);
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
