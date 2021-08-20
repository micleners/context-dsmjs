import GlobalStyle from './GlobalStyles';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';
import { CharacterProvider } from './context/useCharacterContext';

import { StyledRow } from './components/styled';

function App() {
  return (
    <CharacterProvider>
      <GlobalStyle />
      <StyledRow>
        <CharacterForm />
        <Character />
      </StyledRow>
    </CharacterProvider>
  );
}

export default App;
