import React from 'react';
import Particles from 'react-tsparticles';
import Font from 'react-font';
import { FaHeart } from 'react-icons/fa';
import { Wave } from './Wave';
import { FooterDiv, ParticlesDiv, Copy } from './styles';

export const Footer = () => {
  return (
    <FooterDiv>
      <Wave />
      <ParticlesDiv>
        <Particles
          id='p2'
          height='100%'
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

      <Copy>
        <Font family='Montserrat'>
          Hecho con
          {' '}
          <FaHeart />
          {'  -'}
        </Font>
        <a href='https://github.com/carlosfdezb' style={{ color: 'white', marginLeft: '10px' }} target='_blank'>
          <Font family='Montserrat'>Carlos Fernández</Font>
        </a>
      </Copy>
    </FooterDiv>
  );
};
