import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
`;

export const StyledCharacter = styled.div`
  padding: 60px 40px;
`;

export const StyledCharacterRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;

  &:last-child {
    border-bottom: 1px solid;
  }

  div {
    margin: 10px 30px;
    text-align: right;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;

  .input-group {
    padding: 20px;
  }
`;
