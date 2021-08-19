import { UPDATE_CHARACTER, CLEAR_CHARACTER } from './actionTypes';

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

const characterReducer = (state = initialCharacter, action) => {
  switch (action.type) {
    case UPDATE_CHARACTER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case CLEAR_CHARACTER: {
      return initialCharacter;
    }
    default:
      return state;
  }
};

export default characterReducer;
