import { createSlice } from "@reduxjs/toolkit";
import { ReportTransaction } from "../Apis/ReportTransaction";

export const ReportTransactionSlice = createSlice({
  name: "reporttransaction",
  initialState: {
    reporttransaction: null,
    authenticatingreporttransaction: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.reporttransaction = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingreporttransaction = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ReportTransaction.fulfilled, (state, action) => {
      state.reporttransaction = action.payload;
      state.authenticated = false;
      state.authenticatingreporttransaction = false;
      return state;
    });
    builder.addCase(ReportTransaction.pending, (state, action) => {
      state.authenticatingreporttransaction = true;
      state.authenticated = true;
    });
    builder.addCase(ReportTransaction.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingreporttransaction = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ReportTransactionSlice.actions;

export const ReportTransactionSelector = (state) => state.reporttransaction;
