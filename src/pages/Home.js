import React from 'react';
import { Header } from '../components/Header';
import { PackageInfo } from '../components/PackageInfo';
import { Features } from '../components/Features';

import { Body } from '../components/Header/styles';

import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <Header />
      <Body>
        <Features />
        <PackageInfo />
      </Body>

      <Footer />
    </>
  );
};
