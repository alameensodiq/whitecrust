import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./MainComponents/Login";
import Dashboard from "./MainComponents/Components/Dashboard";
import Customers from "./MainComponents/Components/Customers";
import Investments from "./MainComponents/Components/Investments";
import Transfers from "./MainComponents/Components/Transfers";
import Loans from "./MainComponents/Components/Loans";
import Audit from "./MainComponents/Components/Audit";
import Report from "./MainComponents/Components/Report";
import Electricity from "./MainComponents/Components/Electricity";
import Cable from "./MainComponents/Components/Cable";
import Data from "./MainComponents/Components/Data";
import Airtime from "./MainComponents/Components/Airtime";
import CustomerInfo from "./MainComponents/Components/CustomerInfo";
import ProtectedRoutes from "./ProtectedRoutes";
import Account from "./MainComponents/Components/Account";
import InvestmentTypes from "./MainComponents/Components/InvestmentTypes";
import InvestmentPackages from "./MainComponents/Components/InvestmentPackages";
import AccountDetail from "./MainComponents/Components/AccountDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/:id" element={<AccountDetail />} />
        <Route path="/customers/:id" element={<CustomerInfo />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/investmentstypes" element={<InvestmentTypes />} />
        <Route path="/investmentspackages" element={<InvestmentPackages />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/airtime" element={<Airtime />} />
        <Route path="/data" element={<Data />} />
        <Route path="/cable" element={<Cable />} />
        <Route path="/electricity" element={<Electricity />} />
        <Route path="/report" element={<Report />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
