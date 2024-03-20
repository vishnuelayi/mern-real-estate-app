import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  userInfo: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "", // Change message to errorMessage for clarity
};

export const updateUser = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    try {
      const response = await userService.updateUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Change to error.message
    }
  }
);

export const updateProfileImage = createAsyncThunk(
  "user/updateProfileImage",
  async (data, thunkAPI) => {
    try {
      const response = await userService.updateProfileImage(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Change to error.message
    }
  })

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.userInfo = [];
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload; // Change to action.payload
      }) .addCase(updateProfileImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfileImage.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if(state.isSuccess)
        {
          console.log("Pofile image updated successfully");
        }
      })
      .addCase(updateProfileImage.rejected, (state, action) => {
        state.userInfo = [];
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload; // Change to action.payload
      });
  },
});

export default userSlice.reducer;