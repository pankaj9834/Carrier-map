import { configureStore } from '@reduxjs/toolkit';
import interestReducer from './Components/interstSlice';

export const store = configureStore({
  reducer: {
    interest: interestReducer,
  },
});