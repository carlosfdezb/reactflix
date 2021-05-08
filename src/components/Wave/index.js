import React from 'react';
import { Svg } from './styles';

export const Wave = () => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      className='transition duration-300 ease-in-out delay-150'
      viewBox='0 0 1440 700'
    >
      <defs>
        <linearGradient id='gradient'>
          <stop offset='5%' stopColor='#4c2c4cff' />
          <stop offset='95%' stopColor='#1c2c4cff' />
        </linearGradient>
      </defs>
      <path
        fill='url(#gradient)'
        strokeWidth='0'
        d='M0 700V350c120.179-21.571 240.357-43.143 358-24s232.75 79 347 53 227.643-137.857 350-157 253.679 54.429 385 128v350z'
        className='transition-all duration-300 ease-in-out delay-150'
        transform='rotate(-180 720 350)'
      />
    </Svg>
  );
};
