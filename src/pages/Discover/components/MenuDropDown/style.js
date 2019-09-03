import List from '@material-ui/core/List';
import styled from 'styled-components';

const StyledList = styled(List)`
  && {
    width: 100%;
    border: 1px solid lightgray;
    padding: 0;
    color: red;
    max-height: 300px;
    overflow: hidden;
    overflow-y: scroll;
  }
  & .primary {
    font-size: 11px;
    color: #ec403c;
  }

  & .root {
    padding: 4px;
    color: red;
  }
`;

export default StyledList;
