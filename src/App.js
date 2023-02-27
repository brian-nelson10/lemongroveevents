import React from 'react';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
      <HashRouter basename='/lemongroveevents'>
        <ScrollTop />
        <AnimatedRoutes />
      </HashRouter>
  );
}

export default App;
