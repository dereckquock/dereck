import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const BlinkingDot = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 1.5rem;
  background: rgba(179, 0, 0, 0.8);
  border-radius: 15px;
  box-shadow: 0 0 4px rgba(179, 0, 0, 0.8);
  animation: ${blink} 1s infinite;
`;

export default BlinkingDot;
