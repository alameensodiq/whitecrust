import { createSlice } from "@reduxjs/toolkit";
import { Activate } from "../Apis/Activate";

export const ActivateSlice = createSlice({
  name: "activate",
  initialState: {
    activate: null,
    authenticatingactivate: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearStateactivate: (state) => {
      state.activate = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingactivate = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Activate.fulfilled, (state, action) => {
      state.activate = action.payload;
      state.authenticated = false;
      state.authenticatingactivate = false;
      return state;
    });
    builder.addCase(Activate.pending, (state, action) => {
      state.authenticatingactivate = true;
      state.authenticated = true;
    });
    builder.addCase(Activate.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingactivate = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearStateactivate } = ActivateSlice.actions;

export const ActivateSelector = (state) => state.activate;
