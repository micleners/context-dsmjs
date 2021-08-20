import { useState } from 'react';

import GlobalStyle from './GlobalStyles';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';
import { StyledRow } from './components/styled';

function App() {
  const [character, setCharacter] = useState({
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
  });
  return (
    <div>
      <GlobalStyle />
      <StyledRow>
        <CharacterForm character={character} setCharacter={setCharacter} />
        <Character character={character} setCharacter={setCharacter} />
      </StyledRow>
    </div>
  );
}

export default App;
