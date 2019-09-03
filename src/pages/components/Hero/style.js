import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export const StyledGrid = styled(Grid)`
  && {
    position: relative;
    margin-top: 90px;
    @media (max-width: 960px) {
      margin-top: 0;
    }
}`;

export const StyledBackground = styled(CardMedia)`
  && {
    width: 100%;
    height: calc(100vh - 90px);
    @media (max-width: 960px) {
      height: 100vh;
    }
    ${props => props.overlay &&
      `
      position: absolute;
      opacity: ${props.opacity}
    `}
}`;

export const StyledContent = styled(Grid)`
  && {
    flex: 1;
    flex-direction: column;
    position: absolute;
    width: 958px;
    @media (max-width: 960px) {
      width: fit-content;
    }
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: #1A1A1A;
}`;

export const StyledTopText = styled(Typography)`
  && {
    text-align: left;
    @media (max-width: 1050px) {
      font-size: 8vw;
      text-align: center;
      line-height: 10vw;
    }
}`;

export const StyledMobileMidText = styled(Typography)`
  && {
    display: none;
    @media (max-width: 1050px) {
      font-size: 8vw;
      text-align: center;
      display: inherit;
      line-height: 10vw;
    }
}`;

export const StyledMobileBottomText = styled(Typography)`
  && {
    display: none;
    @media (max-width: 1050px) {
      text-align: center;
      font-size: 8vw;
      display: inherit;
      line-height: 10vw;
    }
}`;

export const StyledBottomText = styled(Typography)`
  && {
    text-align: right;
    @media (max-width: 1050px) {
      font-size: 5.24vw;
      display: none;
    }
}`;

export const StyledButtonGrid = styled(Grid)`
  && {
    margin-top: 3.66vw;
    text-align: center;
    @media (max-width: 1050px) {
      margin-top: 9vw;
    }
}`;
