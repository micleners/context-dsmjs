import { UPDATE_CHARACTER, CLEAR_CHARACTER } from './actionTypes';

export const updateCharacter = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_CHARACTER,
    payload: data,
  });
};

export const clearCharacter = (data) => (dispatch) => {
  dispatch({
    type: CLEAR_CHARACTER,
    payload: data,
  });
};
