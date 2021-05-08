import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
 0% {
    -webkit-transform: translateX(600px);
    transform: translateX(600px) rotate(9.6deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
    filter: blur(5px);
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0) rotate(9.6deg);          
    filter: blur(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
    transform: translateX(68px) rotate(-1.6deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    transform: translateX(-30px) rotate(-4deg);
            
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    transform: translateX(15px) rotate(4deg);
  }
  95% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    transform: translateX(-15px) rotate(-3.6deg);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    transform: translateX(9px) rotate(2.4deg);
  }
`;

export const slideIn = ({ time = '4s', type = 'ease-in' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type}`;
