import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.84);
`;

export const Content = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  width: fit-fit-content;
  align-items: center;
  padding: 20px;
  @media (max-width: 700px) {
    width: 40%;
  }
`;
export const Warning = styled.div`
  color: red;
  font-size: 18px;
  font-weight: 600;
  width: 346px;
  @media (max-width: 700px) {
    font-weight: 300;
    width: 100%;
  }
`;
export const BoxButton = styled.div`
  margin-top: 20px;
  width: 160px;
  display: flex;
  justify-content: space-around;
`;
export const ButtonYes = styled.div`
  border: 1px solid black;
  width: 56px;
  text-align: center;
  border-radius: 4px;
  background-color: red;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #990000;
  }
  &:active {
    background-color: #5f0002;
  }
`;
export const ButtonNo = styled.div`
  border: 1px solid black;
  width: 56px;
  text-align: center;
  border-radius: 4px;
  background-color: #00b22c;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #016b00;
  }
  &:active {
    background-color: #014c00;
  }
`;
