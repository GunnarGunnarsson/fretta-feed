import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';
import { StyledContainer, StyledIframe } from './style.js';

const Feed = () => (
  <StyledContainer>
    <StyledIframe src="https://feed.mikle.com/widget/v2/91867/" scrolling="no" frameBorder="no"/>
  </StyledContainer>
);

export default withStyles(theme)(Feed);
