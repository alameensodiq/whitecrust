import { createSlice } from "@reduxjs/toolkit";
import { Audits } from "../Apis/Audits";

export const AuditsSlice = createSlice({
  name: "accounts",
  initialState: {
    audits: null,
    authenticatingaudits: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.audits = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaudits = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Audits.fulfilled, (state, action) => {
      state.audits = action.payload;
      state.authenticated = false;
      state.authenticatingaudits = false;
      return state;
    });
    builder.addCase(Audits.pending, (state, action) => {
      state.authenticatingaudits = true;
      state.authenticated = true;
    });
    builder.addCase(Audits.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaudits = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AuditsSlice.actions;

export const AuditsSelector = (state) => state.audits;
