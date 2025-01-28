import { createSlice } from "@reduxjs/toolkit";
import { Reports } from "../Apis/Report";

export const ReportSlice = createSlice({
  name: "report",
  initialState: {
    report: null,
    authenticatingreport: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.report = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingreport = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Reports.fulfilled, (state, action) => {
      state.report = action.payload;
      state.authenticated = false;
      state.authenticatingreport = false;
      return state;
    });
    builder.addCase(Reports.pending, (state, action) => {
      state.authenticatingreport = true;
      state.authenticated = true;
    });
    builder.addCase(Reports.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingreport = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ReportSlice.actions;

export const ReportSelector = (state) => state.report;
