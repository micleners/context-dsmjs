import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import characterReducer from './redux/reducer';

import GlobalStyle from './GlobalStyles';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';
import { CharacterProvider } from './context/useCharacterContext';

const StyledRow = styled.div`
  display: flex;
`;

const store = createStore(characterReducer);

function App() {
  return (
    <CharacterProvider>
      <Provider store={store}>
        <GlobalStyle />
        <StyledRow>
          <CharacterForm />
          <Character />
        </StyledRow>
      </Provider>
    </CharacterProvider>
  );
}

export default App;
