import { createSlice } from '@reduxjs/toolkit';
import { LoginUser } from '../Apis/Login';

export const LoginSlice = createSlice({
  name: 'create',
  initialState: {
    loginuser: null,
    authenticating: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.loginuser = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticating = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.loginuser = action.payload;
      state.authenticated = false;
      state.authenticating = false;
      return state;
    });
    builder.addCase(LoginUser.pending, (state, action) => {
        state.authenticating = true;
        state.authenticated = true;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticating = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = LoginSlice.actions;

export const LoginSelector = (state) => state.loginuser;
