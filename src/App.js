import styled from 'styled-components';
import { Provider } from 'react-redux';

import store from './redux/store';
import GlobalStyle from './GlobalStyles';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';

const StyledRow = styled.div`
  display: flex;
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <StyledRow>
        <CharacterForm />
        <Character />
      </StyledRow>
    </Provider>
  );
}

export default App;
