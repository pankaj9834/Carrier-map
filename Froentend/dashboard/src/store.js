import { configureStore } from '@reduxjs/toolkit';
import interestReducer from './Components/ReduxSlice/interestSlice';

export const store = configureStore({
  reducer: {
    interest: interestReducer,
  },
});