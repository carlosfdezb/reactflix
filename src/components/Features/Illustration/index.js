import React, { useState } from 'react';
import { Container } from './styles';

import { Background } from './Background';

export const Illustration = () => {
  const [focus, setFocus] = useState(false);
  return (
    <Container onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
      <Background />
    </Container>
  );
};
