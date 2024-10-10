import { createSlice } from "@reduxjs/toolkit";
import { TransactionDashboards } from "../Apis/TransactionDashboard";

export const TransactionDashboardSlice = createSlice({
  name: "transactiondashboards",
  initialState: {
    transactiondashboards: null,
    authenticatingtransactiondashboards: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.transactiondashboards = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingtransactiondashboards = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(TransactionDashboards.fulfilled, (state, action) => {
      state.transactiondashboards = action.payload;
      state.authenticated = false;
      state.authenticatingtransactiondashboards = false;
      return state;
    });
    builder.addCase(TransactionDashboards.pending, (state, action) => {
      state.authenticatingtransactiondashboards = true;
      state.authenticated = true;
    });
    builder.addCase(TransactionDashboards.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingtransactiondashboards = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = TransactionDashboardSlice.actions;

export const TransactionDashboardSelector = (state) =>
  state.transactiondashboards;
