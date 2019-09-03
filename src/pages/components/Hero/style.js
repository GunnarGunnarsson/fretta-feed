import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

export const StyledGrid = styled(Grid)`
  && {
    position: relative;
    margin-top: 0;
}`;

export const StyledBackground = styled(CardMedia)`
  && {
    width: 100%;
    height: calc(100vh);
}`;

export const StyledContent = styled(Grid)`
  && {
    flex: 1;
    flex-direction: column;
    position: absolute;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: #1A1A1A;
}`;
