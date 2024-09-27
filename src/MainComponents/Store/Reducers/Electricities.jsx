import { createSlice } from "@reduxjs/toolkit";
import { Electricities } from "../Apis/Electricities";

export const ElectricitiesSlice = createSlice({
  name: "electricities",
  initialState: {
    electricities: null,
    authenticatingelectricities: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.electricities = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingelectricities = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Electricities.fulfilled, (state, action) => {
      state.electricities = action.payload;
      state.authenticated = false;
      state.authenticatingelectricities = false;
      return state;
    });
    builder.addCase(Electricities.pending, (state, action) => {
      state.authenticatingelectricities = true;
      state.authenticated = true;
    });
    builder.addCase(Electricities.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingelectricities = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ElectricitiesSlice.actions;

export const ElectricitiesSelector = (state) => state.electricities;
