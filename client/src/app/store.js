import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authentication/authSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});

// Export the configured store
export default store;
