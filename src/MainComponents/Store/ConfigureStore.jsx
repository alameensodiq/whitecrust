import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./Reducers/Login";
import { DashboardSlice } from "./Reducers/Dashboards";
import { TransfersSlice } from "./Reducers/Transfers";
import { CustomSlice } from "./Reducers/Custom";
import { AccountsSlice } from "./Reducers/Accounts";
import { InvestmentHistorySlice } from "./Reducers/InvestmentHistory";
import { InvestmentSlice } from "./Reducers/Investment";
import { LoanSlice } from "./Reducers/Loan";
import { ElectricitiesSlice } from "./Reducers/Electricities";
import { DatasSlice } from "./Reducers/Datas";
import { CablesSlice } from "./Reducers/Cables";
import { AirtimesSlice } from "./Reducers/Airtime";
import { AuditsSlice } from "./Reducers/Audits";

export default configureStore({
  reducer: {
    login: LoginSlice?.reducer,
    dashboards: DashboardSlice?.reducer,
    transfers: TransfersSlice?.reducer,
    custom: CustomSlice?.reducer,
    accounts: AccountsSlice?.reducer,
    history: InvestmentHistorySlice?.reducer,
    investment: InvestmentSlice?.reducer,
    loan: LoanSlice?.reducer,
    electricities: ElectricitiesSlice?.reducer,
    datas: DatasSlice?.reducer,
    cables: CablesSlice?.reducer,
    airtime: AirtimesSlice?.reducer,
    audits: AuditsSlice?.reducer
  }
});
