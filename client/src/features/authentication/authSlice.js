import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "", // Change message to errorMessage for clarity
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await authService.loginUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Change to error.message
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await authService.signupUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Change to error.message
    }
  }
);

export const googleAuth = createAsyncThunk(
  "auth/google",
  async (data, thunkAPI) => {
    try {
      const response = await authService.googleAuth(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Change to error.message
    }
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
       
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = [];
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload; // Change to action.payload
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.singnedInUser = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.singnedInUser = [];
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload; // Change to action.payload
      })
      .addCase(googleAuth.pending, (state) => {
        state.isLoading = true;
        
      })
      .addCase(googleAuth.fulfilled, (state, action) => {
        state.singnedInUser = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(googleAuth.rejected, (state, action) => {
        state.singnedInUser = [];
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload; // Change to action.payload
      });
  },
});

export default authSlice.reducer;
