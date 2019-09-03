import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const StyledContainer = styled.div`
  && {
    position: relative;
    width: 100%;
}`;

export const StyledSocialItem = styled(Grid)`
  && {
    padding: 50px 0 50px;
    width: auto;
    margin-left: 28vw;
    float: left;
    overflow: auto;
    @media (max-width: 1100px) {
      padding: 24px 0 60px;
      width: 180px;
      margin: auto;
      float: none;
    }
}`;

export const StyledContactMobileItem = styled(Grid)`
  && {
    padding: 50px 0 10px;
    width: auto;
    display: none;
    @media (max-width: 1100px) {
      display: inherit;
      text-align: center;
      margin: auto;
      float: none;
    }
}`;

export const StyledContactItem = styled(Grid)`
  && {
    padding: 50px 0 40px;
    width: auto;
    margin-right: 28vw;
    float: right;
    @media (max-width: 1100px) {
      display: none;
    }
}`;
