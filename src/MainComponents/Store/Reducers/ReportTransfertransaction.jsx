import { createSlice } from "@reduxjs/toolkit";
import { ReportTransfertransaction } from "../Apis/ReportTransfertransaction";

export const ReportTransfertransactionSlice = createSlice({
  name: "reporttransfertransaction",
  initialState: {
    reporttransfertransaction: null,
    authenticatingreporttransfertransaction: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.reporttransfertransaction = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingreporttransfertransaction = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ReportTransfertransaction.fulfilled, (state, action) => {
      state.reporttransfertransaction = action.payload;
      state.authenticated = false;
      state.authenticatingreporttransfertransaction = false;
      return state;
    });
    builder.addCase(ReportTransfertransaction.pending, (state, action) => {
      state.authenticatingreporttransfertransaction = true;
      state.authenticated = true;
    });
    builder.addCase(ReportTransfertransaction.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingreporttransfertransaction = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ReportTransfertransactionSlice.actions;

export const ReportTransfertransactionSelector = (state) =>
  state.reporttransfertransaction;
