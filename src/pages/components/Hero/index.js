import React from 'react';
import {
  StyledGrid,
  StyledBackground,
  StyledContent,
  StyledTopText,
  StyledMobileMidText,
  StyledMobileBottomText,
  StyledBottomText,
  StyledButtonGrid
} from './style.js';
import Button from '../../../components/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../../modules/theme.js';

const Hero = props => (
  <StyledGrid container>
    <StyledBackground image={require('../../images/Hero-background.png')} />
    <StyledBackground overlay={'true'} opacity={'0.4'} image={require('../../images/Hero-map.svg')} />
    <StyledContent container>
      <Grid item>
        <StyledTopText variant={'h1'}>WHERE OPPORTUNITY</StyledTopText>
      </Grid>
      <Grid item>
        <StyledMobileMidText variant={'h1'}>MEETS</StyledMobileMidText>
      </Grid>
      <Grid item>
        <StyledMobileBottomText variant={'h1'}>NORDIC INNOVATION</StyledMobileBottomText>
      </Grid>
      <Grid item>
        <StyledBottomText variant={'h1'}>MEETS NORDIC INNOVATION</StyledBottomText>
      </Grid>
      <StyledButtonGrid item>
        <Button text={'SEARCH'} url={'/search'} />
      </StyledButtonGrid>
    </StyledContent>
  </StyledGrid>
);

export default withStyles(theme)(Hero);
