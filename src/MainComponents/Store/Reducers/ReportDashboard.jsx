import { createSlice } from "@reduxjs/toolkit";
import { ReportDashboard } from "../Apis/ReportDashboard";

export const ReportDashboardSlice = createSlice({
  name: "reportdashboard",
  initialState: {
    reportdashboard: null,
    authenticatingreportdashboard: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.reportdashboard = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingreportdashboard = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ReportDashboard.fulfilled, (state, action) => {
      state.reportdashboard = action.payload;
      state.authenticated = false;
      state.authenticatingreportdashboard = false;
      return state;
    });
    builder.addCase(ReportDashboard.pending, (state, action) => {
      state.authenticatingreportdashboard = true;
      state.authenticated = true;
    });
    builder.addCase(ReportDashboard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingreportdashboard = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ReportDashboardSlice.actions;

export const ReportDashboardSelector = (state) => state.reportdashboard;
