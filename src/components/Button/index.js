import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';
import { StyledButton } from './style.js';
import PropTypes from 'prop-types';

const Button = ({ text, secondary, url }) => (
  <StyledButton href={url} secondary={secondary}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string,
  secondary: PropTypes.string,
  url: PropTypes.string
};

export default withStyles(theme)(Button);
