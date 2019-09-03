import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const StyledAnchor = styled.div`
  && {
    height: auto;
    width: 1162px;
    margin: auto;
}`;

export const StyledContainer = styled.div`
  && {
    position: relative;
    margin: 98px auto 1.83vw auto;
    width: 100%;
    @media (max-width: 960px) {
      width: 100%;
      margin: 0;
      padding: 12vw 8vw 1.83vw 8vw;
    }
}`;

export const StyledTitle = styled(Typography)`
  && {
    text-align: center;
    @media (max-width: 960px) {
      font-size: 24px;
    }
}`;

export const StyledContent = styled(Typography)`
  && {
    position: relative;
    width: 100%;
    padding: 36px 25px;
}`;
