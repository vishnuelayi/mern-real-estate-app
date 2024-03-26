import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import userReducer from "../features/user/userSlice";
import listingReducer from "../features/listing/listingSlice"

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    listing:listingReducer,
  },
});
