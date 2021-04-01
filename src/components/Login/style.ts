import styled from "styled-components";
export const Login = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  flex-wrap: nowrap;
  width: 250px;
  height: 300px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 200px rgba(100, 100, 100, 20%);
  padding: 20px;
  transition: 1s;
  &:hover {
    transition: 1s;
    box-shadow: inset 0 0 0 200px rgba(0, 0, 0, 30%);
  }
`;
export const LoginTitle = styled.h1`
  text-align: center;
  text-shadow: 7px 3px 6px rgb(66 66 66 / 53%), 0px -5px 10px rgb(209 218 215);
`;

export const Box = styled.div`
  flex-direction: row;
  align-items: center;
  margin: 2px;
  padding: 2px;
`;
export const BoxButtons = styled.div`
  flex-direction: row;
  align-items: center;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 1px;
  margin-right: 4px;
`;
export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  &:focus {
    outline: none;
  }
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
export const ErrorMesage = styled.h3`
 text-align: center;
 color:#9A0303
`;