import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { Container, ParticlesDiv } from './styles';

import { Background } from './Background';

export const Illustration = () => {
  const [focus, setFocus] = useState(false);
  return (
    <Container onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
      <Background />
      <ParticlesDiv>
        <Particles
          id='p3'
          height='63vh'
          width='50vw'
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
              'number': {
                'value': 25,
              },
            },
          }}
        />
      </ParticlesDiv>
    </Container>
  );
};
