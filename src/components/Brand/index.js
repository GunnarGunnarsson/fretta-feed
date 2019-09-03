import React from 'react';
import Logo from '../../../images/logo-lg.svg';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../modules/theme';
import PropTypes from 'prop-types';

import { StyledBrand } from './style.js';

const Brand = ({ width, height }) => (
  <Grid container>
    <Link href={'/'}>
      <StyledBrand image={Logo} width={width} height={height} />
    </Link>
  </Grid>
);

Brand.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default withStyles(theme)(Brand);
