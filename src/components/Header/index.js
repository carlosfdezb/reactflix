import React from 'react';
import Font from 'react-font';
import Particles from 'react-tsparticles';
import { Wave } from '../Wave';
import { Logo } from '../Logo';
import { HeaderDiv, Subtitle, InfoDiv, Img, ParticlesDiv } from './styles';
import Laptop from '../../assets/laptop.png';

export const Header = () => {
  return (
    <>
      <Wave />
      <ParticlesDiv>
        <Particles
          height='65vh'
          width='100vw'
          params={{
            'fullScreen': {
              'enable': false,
              'zIndex': 1,
            },
            'particles': {
              'links': {
                'enable': true,
              },
              'move': {
                'enable': true,
              },
            },
          }}
        />
      </ParticlesDiv>

      <HeaderDiv>
        <InfoDiv>
          <Logo />
          <Subtitle>
            <Font family='Open Sans'>Ve todas tus películas y series favoritas</Font>
          </Subtitle>
        </InfoDiv>
        <Img src={Laptop} />
      </HeaderDiv>
    </>
  );
};
