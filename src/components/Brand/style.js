import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';

export const StyledBrand = styled(CardMedia)`
  && {
    width: ${props => props.width};
    height: ${props => props.height};
  }
`;
