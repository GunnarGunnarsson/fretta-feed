import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme';
import PropTypes from 'prop-types';
import { StyledContainer, StyledIcon } from './style.js';

const Icon = ({ iconLink, iconSrc }) => (
  <StyledContainer>
    <a href={iconLink}>
      <StyledIcon image={iconSrc} />
    </a>
  </StyledContainer>
);

Icon.propTypes = {
  iconLink: PropTypes.string,
  iconSrc: PropTypes.string
};

export default withStyles(theme)(Icon);
