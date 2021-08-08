import { useState } from 'react';

function CharacterExample() {
  const [character, setCharacter] = useState('');
  return (
    <div>
      <CharacterForm character={character} setCharacter={setCharacter} />
      <Character character={character} setCharacter={setCharacter} />
    </div>
  );
}

const CharacterForm = ({ character, setCharacter }) => (
  <div>
    <input
      type="text"
      value={character}
      onChange={(e) => {
        console.log(character);
        setCharacter(e.target.value);
      }}
    />
  </div>
);

const Character = ({ character, setCharacter }) => {
  return (
    <div>
      <p>{character}</p>
      <button onClick={() => setCharacter('')}>Clear Name</button>
    </div>
  );
};

export default CharacterExample;
