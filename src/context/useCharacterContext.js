import { createContext, useContext, useReducer } from 'react';

const CharacterContext = createContext();

const initialCharacter = {
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
};

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'update character': {
      return {
        ...action.character,
      };
    }
    case 'clear character': {
      return initialCharacter;
    }
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export const CharacterProvider = (props) => {
  const [character, dispatch] = useReducer(characterReducer, initialCharacter);

  return <CharacterContext.Provider value={[character, dispatch]} {...props} />;
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error('useCharacter must be used within the CharacterProvider');
  }

  return context;
};

export const updateCharacter = (dispatch, updatedCharacter) => {
  dispatch({ type: 'update character', character: updatedCharacter });
};

export const clearCharacter = (dispatch) => {
  dispatch({ type: 'clear character' });
};
