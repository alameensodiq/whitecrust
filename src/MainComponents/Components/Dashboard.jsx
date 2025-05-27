import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import { ReactComponent as Increase } from "../../assets/increase.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as TotalTransfer } from "../../assets/totaltransfer.svg";
import { ReactComponent as TotalInvestment } from "../../assets/totalinvestments.svg";
import { ReactComponent as TotalBill } from "../../assets/totalbill.svg";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Sign } from "../../assets/sign.svg";
import { ReactComponent as Filtering } from "../../assets/filtering.svg";
import { ReactComponent as Ellipses } from "../../assets/ellipses.svg";
import MixedLineBarChart from "../Reusables/MixedLineBarChart";
import DatePicker from "react-datepicker";
import Donuts from "../Reusables/Donuts";
import DoubleLineChart from "../Reusables/DoubleLineChart";
import Tables from "../Reusables/Table";
import { userData } from "../../userData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dashboards } from "../Store/Apis/Dashboards";
import { CustomerDashboard } from "../Store/Apis/CustomerDashboard";
import { TransferDashboard } from "../Store/Apis/TransferDashboard";
import { InvestmentDashboard } from "../Store/Apis/InvestmentDashboard";
import { BillPaymentDashboard } from "../Store/Apis/BillPaymentDashboard";
import { TransactionDashboards } from "../Store/Apis/TransactionDashboard";
import { Loader } from "../Reusables/Loader";

const Dashboard = () => {
  const [endDate, setEndDate] = useState(new Date("2022-01-01"));
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [filter, setFilter] = useState("");
  const [month, setMonth] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datePickerRef = useRef(null);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
    const dateObjs = new Date(endDate);
    console.log(endDate);
    const formattedDated = dateObjs.toISOString().slice(0, 10);
    console.log(formattedDated);
  };

  useEffect(() => {
    console.log(userData);
    // if(userData !== undefined || userData !== null){
    dispatch(Dashboards());
    dispatch(TransactionDashboards());
    dispatch(BillPaymentDashboard({ startDate }));
    dispatch(InvestmentDashboard());
    dispatch(TransferDashboard({ endDate }));
    dispatch(CustomerDashboard());
    // } else {
    //   navigate("/");
    // }
  }, [userData, month, endDate, filter, startDate, dispatch]);

  const { dashboards, authenticatingdashboards } = useSelector(
    (state) => state.dashboards
  );
  console.log(dashboards);

  const { transactiondashboards, authenticatingtransactiondashboards } =
    useSelector((state) => state.transactiondashboards);
  console.log(transactiondashboards);

  const { customerdashboards, authenticatingcustomerdashboards } = useSelector(
    (state) => state.customerdashboards
  );
  console.log(customerdashboards);

  const { billpaymentdashboards, authenticatingbillpaymentdashboards } =
    useSelector((state) => state.billpaymentdashboards);
  console.log(billpaymentdashboards);

  const { transferdashboards, authenticatingtransferdashboards } = useSelector(
    (state) => state.transferdashboards
  );
  console.log(transferdashboards);

  const { investmentdashboards, authenticatinginvestmentdashboards } =
    useSelector((state) => state.investmentdashboards);
  console.log(investmentdashboards);

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  const formatNumberWithCommas = (number) => {
    if (number == null || isNaN(number)) return "0.00"; // Handle null, undefined, NaN
    const fixedNumber = parseFloat(number).toFixed(2); // Convert to string with 2 decimal places
    const parts = fixedNumber.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const formatNumberWithCommasUser = (number) => {
    if (number == null || isNaN(number)) return "0"; // Handle null, undefined, NaN
    const roundedUp = Math.ceil(Number(number)); // Round up to the nearest whole number
    return roundedUp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatToTwoDecimalPlaces = (number) => {
    if (number == null || isNaN(number)) return "0.00"; // Handle null, undefined, NaN
    return parseFloat(number).toFixed(2);
  };
  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={"Dashboard"} />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-7">
          {authenticatingdashboards ? (
            <Loader />
          ) : (
            <>
              <div className="flex lg:flex-row flex-col md:flex-col gap-3">
                <div
                  className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[75%] flex flex-col gap-2 mt-10 px-5">
                    <span className="text-card-title text-[14px]">
                      Total Users
                    </span>
                    <span className="text-color-user text-[20px] font-bold">
                      {formatNumberWithCommasUser(dashboards?.data?.total_user)}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span>
                        <Increase />
                      </span>
                      <span className="text-card-user">
                        {formatToTwoDecimalPlaces(
                          dashboards?.data?.user_change
                        )}
                        %
                      </span>
                      <span>Up from yesterday</span>
                    </div>
                  </div>
                  <div>
                    <User />
                  </div>
                </div>
                <div
                  className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[75%] flex flex-col gap-2 mt-10 px-5">
                    <span className="text-card-title text-[14px]">
                      Total Transfers
                    </span>
                    <span className="text-color-user text-[20px] font-bold">
                      ₦
                      {formatNumberWithCommas(dashboards?.data?.total_transfer)}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span>Count: {dashboards?.data?.count_tranfer}</span>
                    </div>
                  </div>
                  <div>
                    <TotalTransfer />
                  </div>
                </div>
                <div
                  className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[75%] flex flex-col gap-2 mt-10 px-5">
                    <span className="text-card-title text-[14px]">
                      Total Investments
                    </span>
                    <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                      ₦
                      {dashboards?.data?.total_investment
                        ? formatNumberWithCommas(
                            dashboards?.data?.total_investment
                          )
                        : 0}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span>Count:{dashboards?.data?.count_investment}</span>
                    </div>
                  </div>
                  <div>
                    <TotalInvestment />
                  </div>
                </div>
                <div
                  className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[75%] flex flex-col gap-2 mt-10 px-5">
                    <span className="text-card-title text-[14px]">
                      Total Bill Payments
                    </span>
                    <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                      ₦
                      {formatNumberWithCommas(
                        dashboards?.data?.total_billpayment
                      )}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span>Count: {dashboards?.data?.count_billpayment}</span>
                    </div>
                  </div>
                  <div>
                    <TotalBill />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col gap-3">
                <div
                  className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="flex flex-row justify-center">
                    <span className="text-second-card-text">Investments</span>
                  </div>
                  <MixedLineBarChart
                    data={
                      investmentdashboards ? investmentdashboards?.data : []
                    }
                    background={"#c7cbed"}
                    color={"#344BFD"}
                  />
                  <div className="flex flex-row justify-center gap-2">
                    {/* <span className="text-second-card-text text-[16px]">44%</span>
                <div className="flex flex-col text-compare-second-card text-[10px]">
                  <span>Your performance is 44%</span>
                  <span>better compare to last month</span>
                </div> */}
                  </div>
                  <div className="flex -flex-row justify-center">
                    <button
                      onClick={() => navigate("/investments")}
                      className="bg-details-bg w-[180px] text-[12px] h-[40px] text-details-color rounded-custom cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
                <div
                  className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="flex flex-row justify-center">
                    <span className="text-second-card-text">Transfers</span>
                  </div>
                  <MixedLineBarChart
                    data={
                      transactiondashboards?.data
                        ? transactiondashboards?.data
                        : []
                    }
                    color={"#05B2FA"}
                    background={"#c3e2f0"}
                  />
                  <div className="flex flex-row justify-center gap-2">
                    {/* <span className="text-second-card-text text-[16px]">44%</span>
                <div className="flex flex-col text-compare-second-card text-[10px]">
                  <span>Your performance is 44%</span>
                  <span>better compare to last month</span>
                </div> */}
                  </div>
                  <div className="flex -flex-row justify-center">
                    <button
                      onClick={() => navigate("/transfers")}
                      className="bg-details-colortwo w-[180px] text-[12px] h-[40px] text-details-bgtwo rounded-custom cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
                <div
                  className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="flex flex-row justify-center">
                    <span className="text-second-card-text">Loans</span>
                  </div>
                  <MixedLineBarChart
                    data={[]}
                    color={"rgba(255, 160, 81, 1)"}
                    background={"rgba(255, 160, 81, 0.2)"}
                  />
                  <div className="flex flex-row justify-center gap-2">
                    {/* <span className="text-second-card-text text-[16px]">44%</span>
                <div className="flex flex-col text-compare-second-card text-[10px]">
                  <span>Your performance is 44%</span>
                  <span>better compare to last month</span>
                </div> */}
                  </div>
                  <div className="flex -flex-row justify-center">
                    <button
                      onClick={() => navigate("/loans")}
                      className="bg-details-loanbg w-[180px] text-[12px] h-[40px] text-details-loancolor rounded-custom"
                    >
                      Details
                    </button>
                  </div>
                </div>
                <div
                  className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="flex flex-row px-4 gap-4 items-center justify-end">
                    <span className="text-[14px]">Bill payments</span>
                    {/* <div className="position:relative w-[120px] h-[30px] rounded-custom px-[5px] flex flex-row border items-center"> */}
                    {/* <input className='input' type='date' /> */}
                    {/* <DatePicker
                    className="text-[8px]"
                    selected={endDate}
                    onChange={(date) => dateChanger(date)}
                    ref={datePickerRef}
                    showTimeSelect={false}
                    dateFormat="MMM d yyyy" // Use format tokens to represent "Oct 13 2023"
                    placeholderText="13 Oct 2023"
                    popperPlacement="bottom-start"
                  />
                  <Calendar
                    className="text-[10px]"
                    onClick={() => PickDate()}
                  /> */}
                    <input
                      type="date"
                      className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                      placeholder="Search by name, customerID, account number, transaction reference"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    {/* </div> */}
                  </div>
                  <Donuts
                    data={
                      billpaymentdashboards?.data &&
                      typeof billpaymentdashboards?.data === "object"
                        ? billpaymentdashboards.data
                        : {}
                    }
                  />
                  <div className="flex flex-col gap-3 px-[15px]">
                    <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-10 md:gap-20 sm:gap-6">
                      <div className="flex flex-row gap-1 items-center text-[12px]">
                        <span className="w-[15px] h-[15px] rounded-circle bg-details-color"></span>
                        <span className="text-compare-second-card">Airtel</span>
                        <span className="text-circle-color">
                          {billpaymentdashboards?.data?.total_airtime_amount}
                        </span>
                      </div>
                      <div className="flex flex-row gap-1 items-center text-[12px]">
                        <span className="w-[15px] h-[15px] rounded-circle bg-cable-bg"></span>
                        <span className="text-compare-second-card">Cable</span>
                        <span className="text-circle-color">
                          {billpaymentdashboards?.data?.total_cable_amount}
                        </span>
                      </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-10 md:gap-20 sm:gap-6">
                      <div className="flex flex-row gap-1 items-center text-[12px]">
                        <span className="w-[15px] h-[15px] rounded-circle bg-data-bg"></span>
                        <span className="text-compare-second-card">Data</span>
                        <span className="text-circle-color">
                          {billpaymentdashboards?.data?.total_data_amount}
                        </span>
                      </div>
                      <div className="flex flex-row gap-1 items-center text-[12px]">
                        <span className="w-[15px] h-[15px] rounded-circle bg-elect-bg"></span>
                        <span className="text-compare-second-card">
                          Electricity
                        </span>
                        <span className="text-circle-color">
                          {
                            billpaymentdashboards?.data
                              ?.total_electricity_amount
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-circle-color font-bold">
                    Transaction Overview
                  </span>
                  <Sign />
                </div>
                <div className="flex flex-col border rounded-custom gap-2 pt-3">
                  <div className="flex flex-row px-4 gap-4 items-center justify-end">
                    {/* <span className="text-[14px]">Previous Month</span> */}
                    {/* <div className="position:relative w-[120px] h-[30px] rounded-custom px-[4px] flex flex-row border items-center"> */}
                    {/* <input className='input' type='date' /> */}
                    {/* <DatePicker
                    className="text-[8px] outline-none"
                    selected={endDate}
                    onChange={(date) => dateChanger(date)}
                    ref={datePickerRef}
                    showTimeSelect={false}
                    dateFormat="MMM d yyyy" // Use format tokens to represent "Oct 13 2023"
                    placeholderText="13 Oct 2023"
                    popperPlacement="bottom-start"
                  />
                  <Calendar
                    className="text-[10px]"
                    onClick={() => PickDate()}
                  /> */}
                    <input
                      type="date"
                      className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                      placeholder="Search by name, customerID, account number, transaction reference"
                      onChange={(e) => dateChanger(e.target.value)}
                    />
                    {/* </div> */}
                    <Ellipses />
                  </div>
                  <DoubleLineChart data={transferdashboards?.data} />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-circle-color font-bold">
                    Recent Customers
                  </span>
                </div>
                <div className="flex flex-col border rounded-custom gap-6 py-6">
                  {/* <div className="flex flex-row px-4 gap-4 items-center justify-end">
                    <Filtering />
                    <span className="text-[14px]">Filters</span>
                  </div> */}
                  <Tables overview data={customerdashboards?.data?.results} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
