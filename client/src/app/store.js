import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import userReducer from "../features/user/userSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
