import { createSlice } from '@reduxjs/toolkit';
import { Transfer } from '../Apis/Transfers';

export const TransfersSlice = createSlice({
  name: 'transfers',
  initialState: {
    transfers: null,
    authenticatingtransfers: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.transfers = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingtransfers = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Transfer.fulfilled, (state, action) => {
      state.transfers = action.payload;
      state.authenticated = false;
      state.authenticatingtransfers = false;
      return state;
    });
    builder.addCase(Transfer.pending, (state, action) => {
        state.authenticatingtransfers = true;
        state.authenticated = true;
    });
    builder.addCase(Transfer.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingtransfers = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = TransfersSlice.actions;

export const TransfersSelector = (state) => state.transfers;
