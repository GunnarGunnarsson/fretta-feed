import React from 'react';
import Hero from './components/Hero';
import { withStyles } from '@material-ui/core/styles';
import theme from '../modules/theme.js';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
    </React.Fragment>
  );
};

export default withStyles(theme)(Home);
