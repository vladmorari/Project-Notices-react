import styled, { keyframes } from "styled-components";
const spinner_spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const spinner_fade = keyframes`
  20% {
    opacity: .1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: .1;
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const LoadSnip = styled.div`
  position: relative;
  box-sizing: border-box;
  background-clip: padding-box;
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  transform-origin: 50% 60%;
  transform: perspective(200px) rotateX(66deg);
  &:before,
  &:after {
    content: "";
    position: absolute;
    margin: -4px;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 0.05;
    border: inherit;
    border-color: transparent;
    animation: ${spinner_spin} 1.2s cubic-bezier(0.6, 0.4, 0, 0.8) infinite,
      ${spinner_fade} 1.2s linear infinite;
  }
  &::before {
    border-top-color: #1c00c7;
  }
  &::after {
    border-top-color: #a01108;
    animation-delay: 0.3s;
  }
`;
