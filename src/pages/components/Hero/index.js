import React from 'react';
import {
  StyledGrid,
  StyledBackground,
  StyledContent
} from './style.js';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../../modules/theme.js';
import Typography from '@material-ui/core/Typography';

const Hero = props => (
  <StyledGrid container>
    <StyledBackground image={require('../../images/Hero-background.png')} />
    <StyledContent container>
      <Grid item>
        <Typography variant={'h1'}>FréttaFeed</Typography>
      </Grid>
    </StyledContent>
  </StyledGrid>
);

export default withStyles(theme)(Hero);
