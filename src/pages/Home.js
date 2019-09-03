import styled from 'styled-components';
import React from 'react';
//import Navigation from '../components/Navigation/';
import InfoContainer from '../components/InfoContainer/';
import Hero from './components/Hero';
import MidSection from './components/Mid';
import About from './components/About';
import Grid from '@material-ui/core/Grid';
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import { withStyles } from '@material-ui/core/styles';
import theme from '../modules/theme.js';

const StyledContainer = styled(Grid)`
  && {
    margin: 42px 7.47vw 90px 7.47vw;
    @media (max-width: 960px) {
      margin: 10px 7.47vw 46px;
    }
  }
`;

const StyledLeftItem = styled(Grid)`
  && {
    padding: 0 3.734vw 0 0;
    width: 100%;
    @media (max-width: 960px) {
      padding: 0;
    }
  }
`;

const StyledRightItem = styled(Grid)`
  && {
    padding: 0 0 0 3.734vw;
    width: 100%;
    @media (max-width: 960px) {
      margin-top: 60px;
      padding: 0;
    }
  }
`;

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <MidSection />
      <About />
      <StyledContainer container>
        <StyledLeftItem item md={6}>
          <InfoContainer title="News" content={<Feed />} />
        </StyledLeftItem>
        <StyledRightItem item md={6}>
          <InfoContainer title="Partners" content={<Partners />} bordered />
        </StyledRightItem>
      </StyledContainer>
      <Footer />
    </React.Fragment>
  );
};

export default withStyles(theme)(Home);
