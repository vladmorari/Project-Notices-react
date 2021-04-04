import styled from "styled-components";
export const Notice = styled.div`
  background-color: #1d1d1dc9;
  color: #c57502;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 14% auto;
  border-radius: 10px;
  overflow: auto;
`;
export const Close = styled.div`
  border: 2px solid #ff2800;
  margin: 10px;
  margin-left: auto;
  padding: 4px;

  border-radius: 6px;
  color: white;
  background-color: red;
  font-size: 8px;
  cursor: pointer;
  &:active {
    background-color: red;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
export const Title = styled.h3`
  font-size: 24px;
  margin-top: auto;
  color: #24ca00;
`;
export const Content = styled.h3`
  font-size: 18px;
  margin-top: auto;
`;

export const ButtonBox = styled.div`
  margin: 16px;
  padding: 4px;
  width: auto;
  display: flex;
  justify-content: space-around;
`;
export const Button = styled.button`
  margin: 0px 18px;
  cursor: pointer;
  width: 100px;
  &:active {
    background-color: rgba(6, 24, 44, 0.65);
    color: white;
  }
  @media (max-width: 700px) {
    width: 60px;
  }
`;
