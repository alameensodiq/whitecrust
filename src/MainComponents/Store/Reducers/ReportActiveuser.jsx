import { createSlice } from "@reduxjs/toolkit";
import { ReportActiveUsers } from "../Apis/ReportActiveuser";

export const ReportActiveUsersSlice = createSlice({
  name: "reportactiveusers",
  initialState: {
    reportactiveusers: null,
    authenticatingreportactiveusers: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.reportactiveusers = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingreportactiveusers = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ReportActiveUsers.fulfilled, (state, action) => {
      state.reportactiveusers = action.payload;
      state.authenticated = false;
      state.authenticatingreportactiveusers = false;
      return state;
    });
    builder.addCase(ReportActiveUsers.pending, (state, action) => {
      state.authenticatingreportactiveusers = true;
      state.authenticated = true;
    });
    builder.addCase(ReportActiveUsers.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingreportactiveusers = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ReportActiveUsersSlice.actions;

export const ReportActiveUsersSelector = (state) => state.reportactiveusers;
