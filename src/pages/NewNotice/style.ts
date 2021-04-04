import styled from "styled-components";
export const Content = styled.div`
  border: 1px solid rgba(100, 100, 100, 60%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: auto;
  margin-top: 60px;
  padding: 20px 80px;
  box-shadow: inset 0 0 0 200px rgba(100, 100, 100, 20%);
  border-radius: 6px;
  transition: 0.5s;
  &:hover {
    box-shadow: inset 0 0 0 200px rgba(100, 100, 100, 40%);
  }
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin-top: 8px;
`;
export const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
    border-bottom: 1px solid red;
  }
`;
export const Textarea = styled.textarea`
  background: transparent;
  border: 1px solid black;
`;
export const ButtonBox = styled.div`
  margin: 16px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  margin: 0px 4px;
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
    background-color: rgba(0, 0, 0, 0.1);
    border: 1.5px solid black;
  }
`;
