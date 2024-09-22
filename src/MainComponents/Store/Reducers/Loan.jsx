import { createSlice } from "@reduxjs/toolkit";
import { Loan } from "../Apis/Loan";

export const LoanSlice = createSlice({
  name: "loan",
  initialState: {
    loan: null,
    authenticatingloan: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.loan = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingloan = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Loan.fulfilled, (state, action) => {
      state.loan = action.payload;
      state.authenticated = false;
      state.authenticatingloan = false;
      return state;
    });
    builder.addCase(Loan.pending, (state, action) => {
      state.authenticatingloan = true;
      state.authenticated = true;
    });
    builder.addCase(Loan.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingloan = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = LoanSlice.actions;

export const LoanSelector = (state) => state.loan;
