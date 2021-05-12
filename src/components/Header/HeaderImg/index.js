import React, { useState } from 'react';
import Laptop from '../../../assets/laptop.png';
import { Img, MovieImg1, MovieImg2, MovieImg3, MovieImg4, MovieImg5, MovieImg6, MovieImg7, MovieImg8, MovieImg9, MovieImg10 } from './styles';
import { MOVIES } from '../../../urls/resources';

export const HeaderImg = () => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <MovieImg1 src={MOVIES[0]} focus={focus} />
      <MovieImg3 src={MOVIES[1]} focus={focus} />
      <MovieImg2 src={MOVIES[2]} focus={focus} />
      <MovieImg4 src={MOVIES[3]} focus={focus} />
      <MovieImg5 src={MOVIES[9]} focus={focus} />
      <MovieImg7 src={MOVIES[7]} focus={focus} />
      <MovieImg6 src={MOVIES[4]} focus={focus} />
      <MovieImg8 src={MOVIES[5]} focus={focus} />
      <MovieImg10 src={MOVIES[8]} focus={focus} />
      <MovieImg9 src={MOVIES[6]} focus={focus} />
      <Img src={Laptop} onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} focus={focus} />

    </>
  );
};
