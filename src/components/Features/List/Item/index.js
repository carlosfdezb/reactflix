import React, { useState } from 'react';
import Font from 'react-font';
import { ItemDiv, Title } from './styles';

export const Item = ({ title }) => {
  const [focus, setFocus] = useState(false);
  return (
    <ItemDiv onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} isFocus={focus}>
      <Font family='Poppins'><Title fix={true}>{title}</Title></Font>
    </ItemDiv>
  );
};
