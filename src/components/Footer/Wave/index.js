import React from 'react';
import { Svg } from './styles';

export const Wave = () => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      className='transition duration-300 ease-in-out delay-150'
      viewBox='0 0 1440 400'
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
        d='M0 400V200c243.5-34 487-68 727-68s476.5 34 713 68v200z'
        className='transition-all duration-300 ease-in-out delay-150'
      />
    </Svg>
  );
};
