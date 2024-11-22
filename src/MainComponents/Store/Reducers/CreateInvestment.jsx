import { createSlice } from "@reduxjs/toolkit";
import { CreateInvestment } from "../Apis/CreateInvestment";

export const CreateInvestmentSlice = createSlice({
  name: "createinvest",
  initialState: {
    createinvest: null,
    authenticatingcreateinvest: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.createinvest = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcreateinvest = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CreateInvestment.fulfilled, (state, action) => {
      state.createinvest = action.payload;
      state.authenticated = false;
      state.authenticatingcreateinvest = false;
      return state;
    });
    builder.addCase(CreateInvestment.pending, (state, action) => {
      state.authenticatingcreateinvest = true;
      state.authenticated = true;
    });
    builder.addCase(CreateInvestment.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcreateinvest = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CreateInvestmentSlice.actions;

export const CreateInvestmentSelector = (state) => state.createinvest;
