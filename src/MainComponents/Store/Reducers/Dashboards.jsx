import { createSlice } from '@reduxjs/toolkit';
import { Dashboards } from '../Apis/Dashboards';

export const DashboardSlice = createSlice({
  name: 'dashboards',
  initialState: {
    dashboards: null,
    authenticatingdashboards: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.dashboards = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdashboards = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Dashboards.fulfilled, (state, action) => {
      state.dashboards = action.payload;
      state.authenticated = false;
      state.authenticatingdashboards = false;
      return state;
    });
    builder.addCase(Dashboards.pending, (state, action) => {
        state.authenticatingdashboards = true;
        state.authenticated = true;
    });
    builder.addCase(Dashboards.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingdashboards = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = DashboardSlice.actions;

export const DashboardSelector = (state) => state.dashboards;
