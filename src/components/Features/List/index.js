import React from 'react';
import { FlexDiv } from './styles';
import { Item } from './Item';

export const List = () => {
  return (
    <div>
      <FlexDiv>
        <Item title='Favoritos' />
        <Item title='En cualquier dispositivo' />
      </FlexDiv>
      <FlexDiv>
        <Item title='Tus películas y series favoritas' />
        <Item title='Interfaz' />
      </FlexDiv>
    </div>
  );
};
