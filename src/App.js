import { createContext, useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyles';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';

const StyledRow = styled.div`
  display: flex;
`;

export const CharacterContext = createContext();

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
    <CharacterContext.Provider value={[character, setCharacter]}>
      <GlobalStyle />
      <StyledRow>
        <CharacterForm />
        <Character />
      </StyledRow>
    </CharacterContext.Provider>
  );
}

export default App;
