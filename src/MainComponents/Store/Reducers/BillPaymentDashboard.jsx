import { createSlice } from "@reduxjs/toolkit";
import { BillPaymentDashboard } from "../Apis/BillPaymentDashboard";

export const BillPaymentDashboardSlice = createSlice({
  name: "billpaymentdashboards",
  initialState: {
    billpaymentdashboards: null,
    authenticatingbillpaymentdashboards: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.billpaymentdashboards = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingbillpaymentdashboards = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(BillPaymentDashboard.fulfilled, (state, action) => {
      state.billpaymentdashboards = action.payload;
      state.authenticated = false;
      state.authenticatingbillpaymentdashboards = false;
      return state;
    });
    builder.addCase(BillPaymentDashboard.pending, (state, action) => {
      state.authenticatingbillpaymentdashboards = true;
      state.authenticated = true;
    });
    builder.addCase(BillPaymentDashboard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingbillpaymentdashboards = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = BillPaymentDashboardSlice.actions;

export const BillPaymentDashboardSelector = (state) =>
  state.billpaymentdashboards;
