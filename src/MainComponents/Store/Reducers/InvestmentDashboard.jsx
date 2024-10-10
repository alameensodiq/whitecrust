import { createSlice } from "@reduxjs/toolkit";
import { InvestmentDashboard } from "../Apis/InvestmentDashboard";

export const InvestmentDashboardSlice = createSlice({
  name: "investmentdashboards",
  initialState: {
    investmentdashboards: null,
    authenticatinginvestmentdashboards: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.investmentdashboards = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinginvestmentdashboards = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(InvestmentDashboard.fulfilled, (state, action) => {
      state.investmentdashboards = action.payload;
      state.authenticated = false;
      state.authenticatinginvestmentdashboards = false;
      return state;
    });
    builder.addCase(InvestmentDashboard.pending, (state, action) => {
      state.authenticatinginvestmentdashboards = true;
      state.authenticated = true;
    });
    builder.addCase(InvestmentDashboard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinginvestmentdashboards = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = InvestmentDashboardSlice.actions;

export const InvestmentDashboardSelector = (state) =>
  state.investmentdashboards;
