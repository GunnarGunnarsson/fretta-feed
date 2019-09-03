import React from 'react';
import {
  StyledContainer,
  StyledLeftDiv,
  StyledLeftContent,
  StyledRightDiv,
  StyledButtonDiv,
  StyledRightTitle,
  StyledRightContent
} from './style.js';
import Button from '../../../components/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../../modules/theme.js';

const MidSection = props => (
  <StyledContainer>
    <StyledLeftDiv item xs={4}>
      <Typography variant={'h2'}>
        How to find a cluster
      </Typography>
      <StyledLeftContent variant={'body1'}>
        In the Nordic Mapping search tool you can find clusters of various innovation through keyword search or by
        using the drop down menu options that allow you to choose focus area or country of preference. Each cluster
        has unique information such as the innovation centers official address, focus area, related university or
        research center, as well as potential website address.<br/>
        Try it out for yourself!
      </StyledLeftContent>
      <StyledButtonDiv>
        <Button text={'SEARCH'} url={'/search'} secondary={"true"} />
      </StyledButtonDiv>
    </StyledLeftDiv>
    <StyledRightDiv item>
      <StyledRightTitle variant={'h1'}>
        8
      </StyledRightTitle>
      <StyledRightContent variant={'subtitle1'}>
        countries and counting
      </StyledRightContent>
    </StyledRightDiv>
  </StyledContainer>
);

export default withStyles(theme)(MidSection);
