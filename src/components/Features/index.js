import React, { useState } from 'react';
import Font from 'react-font';
import { BsArrowRightShort } from 'react-icons/bs';
import { Illustration } from './Illustration';
import { Container, Title, Anchor, H1, H2, Desktop, Mobile, Info, Button } from './styles';
import { FEATURES } from '../../urls/resources';

export const Features = () => {
  const [select, setSelect] = useState(0);
  const [anim, setAnim] = useState(true);

  const handleSelect = () => {
    setTimeout(() => {
      select === FEATURES.length - 1 ? setSelect(0) : setSelect(select + 1);
      setAnim(true);
    }, 500);
  };

  return (
    <>
      <Font family='Poppins'>
        <Title>
          Una
          {' '}
          <Anchor href='https://web.dev/progressive-web-apps/'>Progressive Web App</Anchor>
          {' '}
          dónde podrás ver todo lo que quieras
        </Title>
      </Font>
      <Container select={anim}>
        <Illustration />
        <Desktop src={FEATURES[select].desktop} />
        <Mobile src={FEATURES[select].mobile} />
        <Info>
          <Font family='Poppins'><H1>{FEATURES[select].title}</H1></Font>
          <Font family='Roboto'><H2>{FEATURES[select].body}</H2></Font>
        </Info>

        <Button onClick={() => { handleSelect(); setAnim(false); }}><BsArrowRightShort size={45} /></Button>
      </Container>
    </>
  );
};
