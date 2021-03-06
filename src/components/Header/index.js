import React from 'react';
import Font from 'react-font';
import Particles from 'react-tsparticles';
import { SiGithub } from 'react-icons/si';
import { Wave } from './Wave';
import { Logo } from './Logo';
import { HeaderDiv, Subtitle, InfoDiv, ParticlesDiv, GitDiv } from './styles';
import { Button } from './Button';
import { HeaderImg } from './HeaderImg';

export const Header = () => {
  return (
    <>
      <Wave />
      <ParticlesDiv>
        <Particles
          id='p1'
          height='68vh'
          width='100vw'
          params={{
            'fullScreen': {
              'enable': false,
              'zIndex': 1,
            },
            'particles': {
              'color': {
                'value': '#efeeee',
              },
              'links': {
                'color': {
                  'value': '#efeeee',
                },
                'enable': true,
              },
              'move': {
                'enable': true,
              },
            },
          }}
        />
      </ParticlesDiv>

      <GitDiv href='https://github.com/carlosfdezb/reactflix-pwa' target='_blank'>
        <SiGithub size={32} />
      </GitDiv>
      <HeaderDiv>
        <InfoDiv>
          <Logo />
          <Subtitle>
            <Font family='Open Sans'>Ve todas tus películas y series favoritas</Font>
          </Subtitle>
          <Button />
        </InfoDiv>
        <HeaderImg />
      </HeaderDiv>
    </>
  );
};
