import React from 'react';
import { Header } from '../components/Header';
import { PackageInfo } from '../components/PackageInfo';

import { Body } from '../components/Header/styles';

import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <Header />
      <Body>

        <PackageInfo />

      </Body>

      <Footer />
    </>
  );
};
