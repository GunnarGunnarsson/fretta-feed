import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';
import { StyledContainer } from './style.js';

const Spacer = () => (
  <StyledContainer/>
);

export default withStyles(theme)(Spacer);
