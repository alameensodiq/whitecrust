import { createSlice } from "@reduxjs/toolkit";
import { CustomerDashboard } from "../Apis/CustomerDashboard";

export const CustomerDashboardSlice = createSlice({
  name: "customerdashboards",
  initialState: {
    customerdashboards: null,
    authenticatingcustomerdashboards: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.customerdashboards = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcustomerdashboards = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CustomerDashboard.fulfilled, (state, action) => {
      state.customerdashboards = action.payload;
      state.authenticated = false;
      state.authenticatingcustomerdashboards = false;
      return state;
    });
    builder.addCase(CustomerDashboard.pending, (state, action) => {
      state.authenticatingcustomerdashboards = true;
      state.authenticated = true;
    });
    builder.addCase(CustomerDashboard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcustomerdashboards = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CustomerDashboardSlice.actions;

export const CustomerDashboardSelector = (state) => state.customerdashboards;
