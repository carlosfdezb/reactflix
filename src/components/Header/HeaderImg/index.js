import React, { useState } from 'react';
import Laptop from '../../../assets/laptop.png';
import { Img, MovieImg1, MovieImg2, MovieImg3, MovieImg4, MovieImg5, MovieImg6, MovieImg7, MovieImg8, MovieImg9, MovieImg10 } from './styles';
import P1 from '../../../assets/movies/1.jpg';
import P2 from '../../../assets/movies/2.jpg';
import P3 from '../../../assets/movies/3.jpg';
import P4 from '../../../assets/movies/4.jpg';
import P5 from '../../../assets/movies/13.jpg';
import P6 from '../../../assets/movies/5.jpg';
import P7 from '../../../assets/movies/9.jpg';
import P8 from '../../../assets/movies/6.jpg';
import P9 from '../../../assets/movies/8.jpg';
import P10 from '../../../assets/movies/12.jpg';

export const HeaderImg = () => {
  const [focus, setFocus] = useState(false);

  return (
    <>

      <MovieImg1 src={P1} focus={focus} />
      <MovieImg3 src={P3} focus={focus} />
      <MovieImg2 src={P2} focus={focus} />
      <MovieImg4 src={P4} focus={focus} />
      <MovieImg5 src={P5} focus={focus} />
      <MovieImg7 src={P7} focus={focus} />
      <MovieImg6 src={P6} focus={focus} />
      <MovieImg8 src={P8} focus={focus} />
      <MovieImg10 src={P10} focus={focus} />
      <MovieImg9 src={P9} focus={focus} />
      <Img src={Laptop} onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} focus={focus} />

    </>
  );
};
