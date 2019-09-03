import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';
import { Link as RouterLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  && {
    width: auto;
  }
`;

export const StyledLink = styled(RouterLink)`
  && {
    width: auto;
  }
`;

export const StyledIcon = styled(CardMedia)`
  && {
    float: left;
    width: 24px;
    height: 24px;
    margin: 24px 10px 24px 0;
  }
`;
