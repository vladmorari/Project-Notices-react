import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  color: black;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 140vw;
  background-color: rgba(0, 0, 0, 0.64);
`;

export const Content = styled.div`
  margin-top: 12%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  width: 20%;
  align-items: center;
  padding: 30px;

`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
`;
export const BoxButton = styled.div`
  margin-top: 20px;
  width: 160px;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.div`
  border: 1px solid black;
  width: 60px;
  text-align: center;
  border-radius: 4px;
  background-color: #6EB200;
  color: black;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #016b00;
  }
  &:active {
    background-color: #014c00;
  }
`;