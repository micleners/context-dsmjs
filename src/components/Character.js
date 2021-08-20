import { useContext } from 'react';

import { CharacterContext } from '../App';
import { StyledCharacter, StyledCharacterRow } from './styled';

export default function Character() {
  const [character, setCharacter] = useContext(CharacterContext);
  return (
    <StyledCharacter>
      {character &&
        Object.entries(character).map(([key, value]) => (
          <StyledCharacterRow key={key}>
            <div>{key}</div>
            <div>{value}</div>
          </StyledCharacterRow>
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
