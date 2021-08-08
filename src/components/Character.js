import styled from 'styled-components';

import { CLEAR_CHARACTER } from '../redux/actionTypes';
import { useSelector, useDispatch } from 'react-redux';

const StyledCharacter = styled.div`
  padding: 60px 40px;
`;

const StyledRow = styled.div`
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

export default function Character() {
  const character = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <StyledCharacter>
      {character &&
        Object.entries(character).map(([key, value]) => (
          <StyledRow key={key}>
            <div>{key}</div>
            <div>{value}</div>
          </StyledRow>
        ))}
      <button onClick={() => dispatch({ type: CLEAR_CHARACTER })}>
        Clear Sheet
      </button>
    </StyledCharacter>
  );
}
