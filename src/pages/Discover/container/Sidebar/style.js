import List from '@material-ui/core/List';
import styled from 'styled-components';

const StyledList = styled(List)`
  && {
    margin-top: 80px;
  }
  & .root {
    margin: 0 auto;
    border: none;
    text-align: center;
  }
  & .root-chip {
    color: white;
    background-color: #ec403c;
  }
  & .root-info {
    color: #bfbfbf;
  }
  & .root-tooltip {
    background-color: red;
    max-width: 30px;
  }
  & .root-grid-item {
    text-align: center;
  }
`;

export default StyledList;
