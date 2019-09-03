import styled from 'styled-components';
import Toolbar from '../Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export const StyledToolbar = styled(Toolbar)`
  && {
    height: auto;
  }
`;

export const StyledLeftDiv = styled.div`
  && {
    flex: 1;
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

export const StyledLeftDivMobile = styled.div`
  && {
    flex: 1;
    display: none;
    @media (max-width: 960px) {
      display: block;
    }
  }
`;

export const StyledRightDiv = styled.div`
  && {
    flex: 1;
    display: 'flex';
    justify-content: 'flex-end';
  }
`;

export const StyledLink = styled(Link)`
  && {
    font-family: Georgia;
    font-size: 13.5px;
    color: #1A1A1A;
    line-height: 17px;
    font-weight: 100;
    margin: 36px 40px;
    letter-spacing: 1px;
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

export const StyledIconButton = styled(IconButton)`
  && {
    display: none;
    @media (max-width: 960px) {
      display: block;
    }
}`;

export const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  && {
    width: 100px;
}`;
