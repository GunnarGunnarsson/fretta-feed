import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';
import { StyledContainer, StyledTitle, StyledDescription } from './style.js';
import PropTypes from 'prop-types';

const DrawerItem = ({ title, description }) => (
  <StyledContainer>
    <StyledTitle variant={'h2'}>
      {title}
    </StyledTitle>
    <StyledDescription variant={'subtitle2'}>
      {description}
    </StyledDescription>
  </StyledContainer>
);

DrawerItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default withStyles(theme)(DrawerItem);
