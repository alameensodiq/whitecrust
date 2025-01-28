import { createSlice } from "@reduxjs/toolkit";
import { ReportTransfercustomers } from "../Apis/ReportTransfercustomers";

export const ReportTransfercustomersSlice = createSlice({
  name: "reportcustomers",
  initialState: {
    reportcustomers: null,
    authenticatingreportcustomers: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.reportcustomers = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingreportcustomers = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ReportTransfercustomers.fulfilled, (state, action) => {
      state.reportcustomers = action.payload;
      state.authenticated = false;
      state.authenticatingreportcustomers = false;
      return state;
    });
    builder.addCase(ReportTransfercustomers.pending, (state, action) => {
      state.authenticatingreportcustomers = true;
      state.authenticated = true;
    });
    builder.addCase(ReportTransfercustomers.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingreportcustomers = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ReportTransfercustomersSlice.actions;

export const ReportTransfercustomersSelector = (state) => state.reportcustomers;
