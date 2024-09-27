import { createSlice } from "@reduxjs/toolkit";
import { Datas } from "../Apis/Data";

export const DatasSlice = createSlice({
  name: "datas",
  initialState: {
    datas: null,
    authenticatingdatas: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.datas = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdatas = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Datas.fulfilled, (state, action) => {
      state.datas = action.payload;
      state.authenticated = false;
      state.authenticatingdatas = false;
      return state;
    });
    builder.addCase(Datas.pending, (state, action) => {
      state.authenticatingdatas = true;
      state.authenticated = true;
    });
    builder.addCase(Datas.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdatas = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DatasSlice.actions;

export const DatasSelector = (state) => state.datas;
