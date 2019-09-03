import styled from 'styled-components';
import ButtonMaterial from '@material-ui/core/Button';

export const StyledButton = styled(ButtonMaterial)`
  && {
    padding: 13px;
    border-radius: 2px;

    :hover {
      border-color: #0e324c;
      background: #0e324c;
      color: #f4f4f4;
    }
    ${props =>
    props.secondary ?
      `
      background: #F4F4F4;
      color: #EC403C;
      ` :
      `
      background: #EC403C;
      color: #F4F4F4;
      `}
  }
`;
