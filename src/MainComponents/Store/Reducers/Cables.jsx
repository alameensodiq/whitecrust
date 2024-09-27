import { createSlice } from "@reduxjs/toolkit";
import { Cables } from "../Apis/Cables";

export const CablesSlice = createSlice({
  name: "cables",
  initialState: {
    cables: null,
    authenticatingcables: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.cables = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcables = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Cables.fulfilled, (state, action) => {
      state.cables = action.payload;
      state.authenticated = false;
      state.authenticatingcables = false;
      return state;
    });
    builder.addCase(Cables.pending, (state, action) => {
      state.authenticatingcables = true;
      state.authenticated = true;
    });
    builder.addCase(Cables.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcables = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CablesSlice.actions;

export const CablesSelector = (state) => state.cables;
