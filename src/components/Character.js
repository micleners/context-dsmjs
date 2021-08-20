import { StyledCharacter, StyledCharacterRow } from './styled';

export default function Character({ character, setCharacter }) {
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
