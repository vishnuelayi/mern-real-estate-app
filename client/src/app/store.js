import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authentication/authSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});


