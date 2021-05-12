import React from 'react';
import Font from 'react-font';
import { Illustration } from './Illustration';
import { List } from './List';
import { Container, Title } from './styles';

export const Features = () => {
  return (
    <>
      <Font family='Poppins'><Title>Una Progressive Web App con estrenos</Title></Font>
      <Container>
        <Illustration />
        <List />
      </Container>
    </>
  );
};
