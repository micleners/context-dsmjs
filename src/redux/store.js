import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterReducer';

export default configureStore({
  reducer: {
    character: characterReducer,
  },
});
