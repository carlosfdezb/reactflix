import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

//pages
import { Home } from './pages/Home';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};

export default App;
