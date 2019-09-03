import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 0;
    border: 1px solid lightgray;
  }
  input::placeholder {
    color: #d3d3d3;
  }
`;

export default StyledTextField;
