import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';

export const StyledContainer = styled(Grid)`
  && {
    width: 100vw;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const StyledList = styled(List)`
  && {
}`;

export const StyledCloseButton = styled(IconButton)`
  && {
    position: absolute;
    top: 5px;
    right: 15px;
}`;

export const StyledListItem = styled(ListItem)`
  && {
}`;
