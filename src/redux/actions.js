import { UPDATE_CHARACTER, CLEAR_CHARACTER } from './actionTypes';

export const updateCharacter = (data) => {
  return {
    type: UPDATE_CHARACTER,
    payload: data,
  };
};

export const clearCharacter = (data) => {
  return {
    type: CLEAR_CHARACTER,
    payload: data,
  };
};
