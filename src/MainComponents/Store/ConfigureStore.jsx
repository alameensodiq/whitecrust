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
import { TransactionDashboardSlice } from "./Reducers/TransactionDashboard";
import { CustomerDashboardSlice } from "./Reducers/CustomerDashboard";
import { BillPaymentDashboardSlice } from "./Reducers/BillPaymentDashboard";
import { TransferDashboardSlice } from "./Reducers/TransferDashboard";
import { InvestmentDashboardSlice } from "./Reducers/InvestmentDashboard";
import { CreateInvestmentSlice } from "./Reducers/CreateInvestment";
import { ReportSlice } from "./Reducers/Report";
import { ReportDashboardSlice } from "./Reducers/ReportDashboard";
import { ReportActiveUsersSlice } from "./Reducers/ReportActiveuser";
import { ReportTransfercustomersSlice } from "./Reducers/ReportTransferCustomer";
import { ReportTransactionSlice } from "./Reducers/ReportTransaction";
import { ReportTransfertransactionSlice } from "./Reducers/ReportTransfertransaction";

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
    audits: AuditsSlice?.reducer,
    transactiondashboards: TransactionDashboardSlice?.reducer,
    customerdashboards: CustomerDashboardSlice?.reducer,
    billpaymentdashboards: BillPaymentDashboardSlice?.reducer,
    transferdashboards: TransferDashboardSlice?.reducer,
    investmentdashboards: InvestmentDashboardSlice?.reducer,
    createinvest: CreateInvestmentSlice?.reducer,
    report: ReportSlice?.reducer,
    reportdashboard: ReportDashboardSlice?.reducer,
    reportactiveusers: ReportActiveUsersSlice?.reducer,
    reportcustomers: ReportTransfercustomersSlice?.reducer,
    reporttransaction: ReportTransactionSlice?.reducer,
    reporttransfertransaction: ReportTransfertransactionSlice?.reducer
  }
});
