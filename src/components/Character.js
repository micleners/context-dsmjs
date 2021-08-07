import { useContext } from 'react';
import { CharacterContext } from '../App';
import styled from 'styled-components';

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
  const [character, setCharacter] = useContext(CharacterContext);
  return (
    <StyledCharacter>
      {character &&
        Object.entries(character).map(([key, value]) => (
          <StyledRow key={key}>
            <div>{key}</div>
            <div>{value}</div>
          </StyledRow>
        ))}
      <button
        onClick={() =>
          setCharacter({
            name: '',
            player: '',
            background: '',
            race: '',
            alignment: '',
            str: '',
            dex: '',
            con: '',
            int: '',
            wis: '',
            cha: '',
          })
        }
      >
        Clear Sheet
      </button>
    </StyledCharacter>
  );
}
