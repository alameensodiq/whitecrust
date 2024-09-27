import { createSlice } from "@reduxjs/toolkit";
import { Airtimes } from "../Apis/Airtime";

export const AirtimesSlice = createSlice({
  name: "airtime",
  initialState: {
    airtime: null,
    authenticatingairtime: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.airtime = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingairtime = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Airtimes.fulfilled, (state, action) => {
      state.airtime = action.payload;
      state.authenticated = false;
      state.authenticatingairtime = false;
      return state;
    });
    builder.addCase(Airtimes.pending, (state, action) => {
      state.authenticatingairtime = true;
      state.authenticated = true;
    });
    builder.addCase(Airtimes.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingairtime = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AirtimesSlice.actions;

export const AirtimesSelector = (state) => state.airtime;
