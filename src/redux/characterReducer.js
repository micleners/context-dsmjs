import { createSlice } from '@reduxjs/toolkit';

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

const characterSlice = createSlice({
  name: 'character',
  initialState: initialCharacter,
  reducers: {
    updateCharacter(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearCharacter(state) {
      return initialCharacter;
    },
  },
});

export const { updateCharacter, clearCharacter } = characterSlice.actions;

export default characterSlice.reducer;

// const characterReducer = (state = initialCharacter, action) => {
//   switch (action.type) {
//     case UPDATE_CHARACTER: {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     }
//     case CLEAR_CHARACTER: {
//       return initialCharacter;
//     }
//     default:
//       return state;
//   }
// };

// export default characterReducer;
