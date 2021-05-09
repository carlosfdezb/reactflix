import React, { useState } from 'react';
import Font from 'react-font';
import { ItemDiv, Img, Title } from './styles';

export const Item = ({ img, fix, name, url }) => {
  const [focus, setFocus] = useState(false);
  return (
    <ItemDiv onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} href={url} target='_blank'>
      {
        img && <Img src={img} isFocus={focus} fix={fix} />
      }
      {
        name && <Font family='Poppins'><Title isFocus={focus}>{name}</Title></Font>
      }
    </ItemDiv>
  );
};
