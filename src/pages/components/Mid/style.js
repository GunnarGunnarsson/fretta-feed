import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const StyledContainer = styled.div`
  && {
    position: relative;
    margin: 7.47vw auto 0 auto;
    padding: 2.782vw 0 2.782vw 6.08vw;
    width: 1162px;
    background: #F4F4F4;
    @media (max-width: 960px) {
      margin: 4vw;
      padding: 8vw;
    }
}`;

export const StyledLeftDiv = styled.div`
  && {
    position: relative;
    float: left;
    width: 73%;
    overflow: hidden;
    @media (max-width: 960px) {
      width: 100%;
    }
}`;

export const StyledLeftContent = styled(Typography)`
  && {
    margin: 1.46vw 0;
    @media (max-width: 960px) {
      margin: 6vw 0;
    }
}`;

export const StyledRightDiv = styled.div`
  && {
    position: relative;
    float: left;
    width: 27%;
    height: 100%;
    overflow: hidden;
    background: #F4F4F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px) {
      display: none;
    }
}`;

export const StyledButtonDiv = styled.div`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}`;

export const StyledRightTitle = styled(Typography)`
  && {
    color: #EC403C;
    font-weight: 600;
}`;

export const StyledRightContent = styled(Typography)`
  && {
    text-align: center;
    width: 10vw;
}`;
