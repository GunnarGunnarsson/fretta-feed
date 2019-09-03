import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme.js';
import { StyledContainer, StyledContent } from './style.js';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const InfoContainer = ({ title, content, bordered }) => (
  <StyledContainer>
    <Typography variant={'h3'}>
      {title}
    </Typography>
    <StyledContent bordered={bordered}>
      {content}
    </StyledContent>
  </StyledContainer>
);

InfoContainer.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  bordered: PropTypes.bool
};

export default withStyles(theme)(InfoContainer);
