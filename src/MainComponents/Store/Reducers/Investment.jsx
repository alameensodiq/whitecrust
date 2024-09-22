import { createSlice } from "@reduxjs/toolkit";
import { Investment } from "../Apis/Investment";

export const InvestmentSlice = createSlice({
  name: "investment",
  initialState: {
    investment: null,
    authenticatinginvestment: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.investment = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinginvestment = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Investment.fulfilled, (state, action) => {
      state.investment = action.payload;
      state.authenticated = false;
      state.authenticatinginvestment = false;
      return state;
    });
    builder.addCase(Investment.pending, (state, action) => {
      state.authenticatinginvestment = true;
      state.authenticated = true;
    });
    builder.addCase(Investment.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinginvestment = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = InvestmentSlice.actions;

export const InvestmentSelector = (state) => state.investment;
