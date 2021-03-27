import styled from "styled-components";
export const Notice = styled.div`
  background-color: #4cb300a6;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 16px;
  margin: 14% auto;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const Close = styled.div`
  border: 2px solid #ff2800;
  margin-left: auto;
  padding: 4px;
  border-radius: 6px;
  color: white;
  background-color: red;
  font-size: 8px;
  cursor: pointer;
  &:active{
    background-color: red;  
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
