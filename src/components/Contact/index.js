import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';
import { StyledTitle, StyledText } from './style.js';

const Contact = () => (
  <div id={'contact'}>
    <StyledTitle variant={'h3'}>CONTACT</StyledTitle>
    <StyledText variant={'subtitle2'}>info@nordvest.se</StyledText>
    <StyledText variant={'subtitle2'}>Your feedback is important to us,<br/>please do not hesitate to bring<br/>small or larger issues to us.</StyledText>
  </div>
);

export default withStyles(theme)(Contact);
