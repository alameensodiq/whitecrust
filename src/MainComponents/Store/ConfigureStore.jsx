import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./Reducers/Login";
import { DashboardSlice } from "./Reducers/Dashboards";
import { TransfersSlice } from "./Reducers/Transfers";
import { CustomSlice } from "./Reducers/Custom";
import { AccountsSlice } from "./Reducers/Accounts";
import { InvestmentHistorySlice } from "./Reducers/InvestmentHistory";

export default configureStore({
  reducer: {
    login: LoginSlice?.reducer,
    dashboards: DashboardSlice?.reducer,
    transfers: TransfersSlice?.reducer,
    custom: CustomSlice?.reducer,
    accounts: AccountsSlice?.reducer,
    history: InvestmentHistorySlice?.reducer
  }
});
