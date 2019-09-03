import withRoot from './modules/withRoot';
import React from 'react';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default withRoot(App);
