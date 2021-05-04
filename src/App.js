import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import GlobalStyles from './styles/GlobalStyles';

//pages
import { Home } from './pages/Home';

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Router>
        <Home path='/' />
      </Router>
    </Suspense>
  );
};

export default App;
