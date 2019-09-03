import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CardMedia from '@material-ui/core/CardMedia';

export const StyledGrid = styled(Grid)`
  && {
    position: relative;
    overflow: hidden;
    height: 280px;
}`;

export const StyledGridList = styled(GridList)`
  && {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2.27vw 1vw 1.5vw;
    color: #1A1A1A;
}`;

export const StyledTile = styled(GridListTile)`
  && {
    display: flex;
    justify-content: center;
}`;

export const StyledTileMobile = styled(GridListTile)`
  && {
    display: flex;
    justify-content: center;
    @media (max-width: 1279px) {
      display: none;
    }
}`;

export const StyledImage = styled(CardMedia)`
  && {
    height: 90%;
    width: 25%;
    min-width: 80px;
    background-size: contain;
    @media (max-width: 1279px) {
      width: 33%;
    }
}`;
