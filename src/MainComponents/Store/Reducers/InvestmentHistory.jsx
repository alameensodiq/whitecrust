import { createSlice } from "@reduxjs/toolkit";
import { InvestmentHistory } from "../Apis/InvestmentsHistory";

export const InvestmentHistorySlice = createSlice({
  name: "history",
  initialState: {
    history: null,
    authenticatinghistory: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.history = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinghistory = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(InvestmentHistory.fulfilled, (state, action) => {
      state.history = action.payload;
      state.authenticated = false;
      state.authenticatinghistory = false;
      return state;
    });
    builder.addCase(InvestmentHistory.pending, (state, action) => {
      state.authenticatinghistory = true;
      state.authenticated = true;
    });
    builder.addCase(InvestmentHistory.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinghistory = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = InvestmentHistorySlice.actions;

export const InvestmentHistorySelector = (state) => state.history;
