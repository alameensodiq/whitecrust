import { createSlice } from "@reduxjs/toolkit";
import { AccountDetails } from "../Apis/AccountDetails";

export const AccountDetailsSlice = createSlice({
  name: "accountdetails",
  initialState: {
    accountdetails: null,
    authenticatingaccountdetails: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.accountdetails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaccountdetails = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AccountDetails.fulfilled, (state, action) => {
      state.accountdetails = action.payload;
      state.authenticated = false;
      state.authenticatingaccountdetails = false;
      return state;
    });
    builder.addCase(AccountDetails.pending, (state, action) => {
      state.authenticatingaccountdetails = true;
      state.authenticated = true;
    });
    builder.addCase(AccountDetails.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaccountdetails = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AccountDetailsSlice.actions;

export const AccountDetailsSelector = (state) => state.accountdetails;
