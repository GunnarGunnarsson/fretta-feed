import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  root: {
    color: theme.palette.common.white
  }
});

const StyledMuiAppBar = styled(MuiAppBar)`
  && {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.04);
  }
`;

function AppBar (props) {
  return <StyledMuiAppBar elevation={0} {...props} />;
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBar);
