import React from 'react';
import Font from 'react-font';
import { Container, ListDiv, Title, SubTitle } from './styles';
import { Item } from './Item';
import { REACT, REACT_ROUTER, WEBPACK, BABEL, STYLED_COMPONENTS, FIREBASE, NODE, EXPRESS, AXIOS, NODEMON } from '../../urls/packages';

export const PackageInfo = () => {
  return (
    <Container>
      <Font family='Poppins'><Title>Algunas herramientas usadas</Title></Font>
      <ListDiv>
        <Font family='Poppins'><SubTitle fix={true}>Frontend</SubTitle></Font>
        <Item img={REACT[0]} url={REACT[1]} />
        <Item img={BABEL[0]} url={BABEL[1]} />
        <Item img={REACT_ROUTER[0]} url={REACT_ROUTER[1]} />
        <Item img={WEBPACK[0]} url={WEBPACK[1]} />
        <Item img={STYLED_COMPONENTS[0]} url={STYLED_COMPONENTS[1]} />
        <Item img={FIREBASE[0]} url={FIREBASE[1]} />
      </ListDiv>
      <ListDiv>
        <Font family='Poppins'><SubTitle>Backend</SubTitle></Font>
        <Item img={NODE[0]} url={NODE[1]} />
        <Item img={EXPRESS[0]} url={EXPRESS[1]} fix={true} />
        <Item name='Cheerio' url='https://cheerio.js.org/' />
        <Item img={AXIOS[0]} url={AXIOS[1]} fix={true} />
        <Item img={NODEMON[0]} url={NODEMON[1]} />
      </ListDiv>
    </Container>
  );
};
