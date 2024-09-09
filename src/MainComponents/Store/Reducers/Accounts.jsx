import { createSlice } from '@reduxjs/toolkit';
import { Accounts } from '../Apis/Accounts';

export const AccountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: null,
    authenticatingaccounts: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.accounts = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaccounts = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Accounts.fulfilled, (state, action) => {
      state.accounts = action.payload;
      state.authenticated = false;
      state.authenticatingaccounts = false;
      return state;
    });
    builder.addCase(Accounts.pending, (state, action) => {
        state.authenticatingaccounts = true;
        state.authenticated = true;
    });
    builder.addCase(Accounts.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingaccounts = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = AccountsSlice.actions;

export const AccountsSelector = (state) => state.accounts;
