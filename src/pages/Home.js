import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Header } from '../components/Header';
import { PackageInfo } from '../components/PackageInfo';
import { Features } from '../components/Features';

import { Body } from '../components/Header/styles';
import { Footer } from '../components/Footer';

export const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <>
      {
        isDesktopOrLaptop ? (
          <>
            <Header />
            <Body>
              <Features />
              <PackageInfo />
            </Body>

            <Footer />
          </>
        ) : <h2 style={{ color: 'black' }}>De momento, sólo versión desktop</h2>
      }
    </>
  );
};
