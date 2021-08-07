import styled from 'styled-components';

import GlobalStyle from './GlobalStyles';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';
import { CharacterProvider } from './context/useCharacterContext';

const StyledRow = styled.div`
  display: flex;
`;

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
