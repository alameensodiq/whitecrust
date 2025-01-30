import { createSlice } from "@reduxjs/toolkit";
import { AccountApprove } from "../Apis/AccountApprove";

export const AccountApproveSlice = createSlice({
  name: "accountapprove",
  initialState: {
    accountapprove: null,
    authenticatingaccountapprove: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.accountapprove = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaccountapprove = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AccountApprove.fulfilled, (state, action) => {
      state.accountapprove = action.payload;
      state.authenticated = false;
      state.authenticatingaccountapprove = false;
      return state;
    });
    builder.addCase(AccountApprove.pending, (state, action) => {
      state.authenticatingaccountapprove = true;
      state.authenticated = true;
    });
    builder.addCase(AccountApprove.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaccountapprove = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AccountApproveSlice.actions;

export const AccountApproveSelector = (state) => state.accountapprove;
