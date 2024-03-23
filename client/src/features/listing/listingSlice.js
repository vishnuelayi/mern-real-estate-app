import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import listingService from "./listingService";

const initialState = {
  property: null,
  addedProperty: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const addProperty = createAsyncThunk(
  "listing/add",
  async (data, thunkAPI) => {
    try {
      const response = await listingService.addProperty(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Change to error.message
    }
  }
);

export const getPropertiesUser = createAsyncThunk(
  "listing/get",
  async (thunkAPI) => {
    try {
      const response = await listingService.getPropertiesUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Change to error.message
    }
  }
);

export const getSingleProperty = createAsyncThunk(
  "listing/get-one",
  async (data, thunkAPI) => {
    try {
      const response = await listingService.getSingleProperty(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Change to error.message
    }
  }
);

export const deleteItem = createAsyncThunk(
  "listing/delete",
  async (data, thunkAPI) => {
    try {
      const response = await listingService.deleteItem(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.addedProperty = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          console.log("property added success fully");
        }
      })
      .addCase(addProperty.rejected, (state, action) => {
        state.addedProperty = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getPropertiesUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPropertiesUser.fulfilled, (state, action) => {
        state.property = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(getPropertiesUser.rejected, (state, action) => {
        state.property = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getSingleProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProperty.fulfilled, (state, action) => {
        state.property = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(getSingleProperty.rejected, (state, action) => {
        state.property = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default listingSlice.reducer;
