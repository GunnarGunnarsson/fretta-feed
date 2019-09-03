import styled from 'styled-components';

export const StyledContainer = styled.div`
  && {
    text-align: center;
}`;

export const StyledContent = styled.div`
  && {
    margin-top: 20px;
    width: 100%;
    height: auto;
    overflow: auto;
    ${props => props.bordered &&
      `
      border: 1px solid #dbdee1;
      border-radius: 5px;
    `}
}`;
