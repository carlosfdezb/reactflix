import React, { useState } from 'react';
import Font from 'react-font';
import { BaseDiv } from './styles';

export const Button = () => {
  const [isZoom, setZoom] = useState(false);

  return (
    <BaseDiv href='https://reactflix-cfdez.web.app/' isZoom={isZoom} onMouseEnter={() => setZoom(true)} onMouseLeave={() => setZoom(false)}>
      <Font family='Open Sans'><h2>Abrir Web App</h2></Font>
    </BaseDiv>
  );
};
