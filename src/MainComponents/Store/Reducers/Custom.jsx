import { createSlice } from '@reduxjs/toolkit';
import { Custom } from '../Apis/Custom';

export const CustomSlice = createSlice({
  name: 'custom',
  initialState: {
    custom: null,
    authenticatingcustom: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.custom = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcustom = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Custom.fulfilled, (state, action) => {
      state.custom = action.payload;
      state.authenticated = false;
      state.authenticatingcustom = false;
      return state;
    });
    builder.addCase(Custom.pending, (state, action) => {
        state.authenticatingcustom = true;
        state.authenticated = true;
    });
    builder.addCase(Custom.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingcustom = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CustomSlice.actions;

export const CustomSelector = (state) => state.custom;
