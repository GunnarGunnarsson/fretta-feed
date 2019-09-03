import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';
import { StyledContainer, StyledSocialItem, StyledContactItem, StyledContactMobileItem } from './style.js';
import Splitter from '../Splitter';
import Social from '../Social';
import Contact from '../Contact';

const Footer = () => (
  <StyledContainer container>
    <Splitter/>
    <StyledContactMobileItem item sm={6}>
      <Contact/>
    </StyledContactMobileItem>
    <StyledSocialItem item sm={6}>
      <Social/>
    </StyledSocialItem>
    <StyledContactItem item sm={6}>
      <Contact/>
    </StyledContactItem>
  </StyledContainer>
);

export default withStyles(theme)(Footer);
