import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  color: black;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  @media (max-width: 700px) {
    width: 40%;
  }
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
  background-color: #6eb200;
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
