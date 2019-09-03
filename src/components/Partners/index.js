import React from 'react';
import { StyledGrid, StyledGridList, StyledTile, StyledTileMobile, StyledImage } from './style.js';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import RisingNorth from '../../../images/partner-logo-1.jpg';
import Design2408 from '../../../images/partner-logo-2.jpg';
import Nordvest from '../../../images/partner-logo-3.jpg';

const Partners = props => {
  const getGridListCols = () => {
    if (isWidthUp('lg', props.width)) {
      return 4;
    }

    if (isWidthUp('sm', props.width)) {
      return 3;
    }
    return 3;
  };

  return (
    <StyledGrid container>
      <StyledGridList cellHeight={'auto'} cols={getGridListCols()}>
        <StyledTile cols={1}>
          <StyledImage image={RisingNorth} />
        </StyledTile>
        <StyledTile cols={1}>
          <StyledImage image={Design2408} />
        </StyledTile>
        <StyledTile cols={1}>
          <StyledImage image={Nordvest} />
        </StyledTile>
        <StyledTileMobile cols={1}>
          <StyledImage image={RisingNorth} />
        </StyledTileMobile>
        <StyledTile cols={1}>
          <StyledImage image={Design2408} />
        </StyledTile>
        <StyledTile cols={1}>
          <StyledImage image={Nordvest} />
        </StyledTile>
        <StyledTile cols={1}>
          <StyledImage image={RisingNorth} />
        </StyledTile>
        <StyledTileMobile cols={1}>
          <StyledImage image={Design2408} />
        </StyledTileMobile>
        <StyledTile cols={1}>
          <StyledImage image={Nordvest} />
        </StyledTile>
        <StyledTile cols={1}>
          <StyledImage image={RisingNorth} />
        </StyledTile>
        <StyledTile cols={1}>
          <StyledImage image={Design2408} />
        </StyledTile>
        <StyledTileMobile cols={1}>
          <StyledImage image={Nordvest} />
        </StyledTileMobile>
      </StyledGridList>
    </StyledGrid>
  );
};

export default withWidth()(Partners);
