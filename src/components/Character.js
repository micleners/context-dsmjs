import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { clearCharacter, useCharacter } from '../context/useCharacterContext';

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
  const [_, dispatch] = useCharacter();
  return (
    <StyledCharacter>
      {character &&
        Object.entries(character).map(([key, value]) => (
          <StyledRow key={key}>
            <div>{key}</div>
            <div>{value}</div>
          </StyledRow>
        ))}
      <button onClick={() => clearCharacter(dispatch)}>Clear Sheet</button>
    </StyledCharacter>
  );
}
