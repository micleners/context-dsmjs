import { createSlice } from 'redux';

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

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialCharacter,
  reducers: {
    updateCharacter: (state, action) => {
      state = {
        ...state,
        ...action.character,
      };
    },
    clearCharacter: (state) => {
      state = initialCharacter;
    },
  },
});

export const { updateCharacter, clearCharacter } = characterSlice.actions;

export default characterSlice.reducer;
