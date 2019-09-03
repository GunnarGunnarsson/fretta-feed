import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  & .paper {
    border-radius: 0;
  }
  & .root-title {
    background-color: #808080;
    padding: 6px 24px 6px;
  }
  & .root-title h6 {
    color: white;
  }
  & .root-content {
    padding: 15px 40px 20px 20px;
  }
  & .root-content p {
    color: #808080;
  }
`;

export default StyledDialog;
