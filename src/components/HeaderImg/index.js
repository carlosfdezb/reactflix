import React, { useState } from 'react';
import Laptop from '../../assets/laptop.png';
import { Img, MovieImg1, MovieImg2, MovieImg3, MovieImg4 } from './styles';
import P1 from '../../assets/movies/1.jpg';
import P2 from '../../assets/movies/2.jpg';
import P3 from '../../assets/movies/3.jpg';
import P4 from '../../assets/movies/4.jpg';

export const HeaderImg = () => {
  const [focus, setFocus] = useState(false);

  return (
    <>

      <MovieImg1 src={P1} focus={focus} />
      <MovieImg3 src={P3} focus={focus} />
      <MovieImg2 src={P2} focus={focus} />
      <MovieImg4 src={P4} focus={focus} />
      <Img src={Laptop} onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} focus={focus} />

    </>
  );
};
