import { createSlice } from "@reduxjs/toolkit";
import { TransferDashboard } from "../Apis/TransferDashboard";

export const TransferDashboardSlice = createSlice({
  name: "transferdashboards",
  initialState: {
    transferdashboards: null,
    authenticatingtransferdashboards: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.transferdashboards = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingtransferdashboards = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(TransferDashboard.fulfilled, (state, action) => {
      state.transferdashboards = action.payload;
      state.authenticated = false;
      state.authenticatingtransferdashboards = false;
      return state;
    });
    builder.addCase(TransferDashboard.pending, (state, action) => {
      state.authenticatingtransferdashboards = true;
      state.authenticated = true;
    });
    builder.addCase(TransferDashboard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingtransferdashboards = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = TransferDashboardSlice.actions;

export const TransferDashboardSelector = (state) => state.transferdashboards;
