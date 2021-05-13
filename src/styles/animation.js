import { keyframes, css } from 'styled-components';

export const slideDesktop = keyframes`
 0% {
    transform: translateX(2000px)
  }
  100% {
    transform: translateX(0)
  }
`;

export const slideOutDesktop = keyframes`
 
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-4500px)
  }
`;
