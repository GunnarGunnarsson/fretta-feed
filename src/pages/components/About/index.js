import React from 'react';
import {
  StyledAnchor,
  StyledContainer,
  StyledTitle,
  StyledContent
} from './style.js';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../../modules/theme.js';

const About = props => (
  <StyledAnchor id={'about'}>
    <StyledContainer>
      <StyledTitle variant={'h3'}>
        About Nordic Mapping
      </StyledTitle>
      <StyledContent variant={'body1'}>
        The purpose with the Nordic Mapping project is to give the right perspective and view over current working
        ecosystem in each country. The mapping is lifting the Innovations centers and Universities skills and focus all
        over the Nordic and Baltic countries. Focusing both on understanding each specialties that opens up for similar
        skills and opportunities available in each country.<br/><br/>
        The first attempt is in collaboration between Business angel Anette Nordvall in Sweden, FiBAN, and DanBAN with
        grants from Rising North to map the New Nordic’s cross-border opportunities.<br/><br/>
        The New Nordic countries represent Sweden, Finland, Norway, Denmark, Estonia, Lithuania, and Latvia.
      </StyledContent>
    </StyledContainer>
  </StyledAnchor>
);

export default withStyles(theme)(About);
