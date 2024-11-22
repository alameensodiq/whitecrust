import React, { useState } from "react";
import Navbar from "../Reusables/Navbar";
import Sidebar from "../Reusables/Sidebar";
import { ReactComponent as Increases } from "../../assets/reportincrease.svg";
import { ReactComponent as Decreases } from "../../assets/reportdecrease.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as TotalTransfer } from "../../assets/totaltransfer.svg";
import { ReactComponent as TotalInvestment } from "../../assets/totalinvestments.svg";
import { ReactComponent as TotalBill } from "../../assets/totalbill.svg";
import { ReactComponent as Filtering } from "../../assets/filtering.svg";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Mobile } from "../../assets/mobile.svg";
import { ReactComponent as Web } from "./../../assets/web.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import { ReactComponent as Filter } from "./../../assets/Filter.svg";
import Donuts from "../Reusables/Donuts";
import Tables from "../Reusables/Table";
import Pagination from "../Reusables/Pagination";
import AreaChart from "../Reusables/AreaChart";
import ReportDonuts from "../Reusables/ReportDonuts";

const Report = () => {
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  const [endDate, setEndDate] = useState(new Date("2022-01-01"));
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [searcher, setSearcher] = useState("");

  // const next = audits?.data?.next;
  // const previous = audits?.data?.previous;
  // const totalPosts = audits?.data?.count;

  const next = true;
  const previous = true;
  const totalPosts = 20;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number);
    setActivater(number);
  };
  const formatNumberWithCommas = (number) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row  items-center justify-between">
            <span>Report Overview</span>
            <div className="flex flex-row lg:w-[70%] justify-end gap-2 px-3">
              <input
                type="date"
                className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                placeholder="Search by name, customerID, account number, transaction reference"
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="date"
                className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                placeholder="Search by name, customerID, account number, transaction reference"
                onChange={(e) => setEndDate(e.target.value)}
              />
              <button
                onClick={() => {
                  // setDownload(true);
                  // handleDownload();
                }}
                className="px-2 flex flex-row gap-1 items-center bg-route-color w-[18%] rounded-custom text-white font-semibold text-[11px]"
              >
                Download Report <Download />
              </button>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col md:flex-col gap-3">
            <div
              className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="w-[75%] flex flex-col gap-2 mt-10 px-5">
                <span className="text-card-title text-[14px]">Total Users</span>
                <span className="text-color-user text-[20px] font-bold">
                  {formatNumberWithCommas()}
                </span>
                <div className="flex flex-row gap-1 text-[10px]">
                  <div className="flex flex-row items-center gap-1">
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "#00F000",
                        borderRadius: "50%"
                      }}
                    ></div>
                    <span className="flex flex-row gap-1">
                      Active: <span style={{ color: "#202224" }}>9900</span>
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "#FF0000",
                        borderRadius: "50%"
                      }}
                    ></div>
                    <span className="flex flex-row gap-1">
                      Inactive: <span style={{ color: "#202224" }}>9900</span>
                    </span>
                  </div>
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
                  ₦{formatNumberWithCommas()}
                </span>
                <div className="flex flex-row gap-1 text-[10px]">
                  <span>Count: {0}</span>
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
                  ₦(0)
                </span>
                <div className="flex flex-row gap-1 text-[10px]">
                  <span>Count:{0}</span>
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
                  ₦{formatNumberWithCommas(0)}
                </span>
                <div className="flex flex-row gap-1 text-[10px]">
                  <span>Count: {0}</span>
                </div>
              </div>
              <div>
                <TotalBill />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-col flex-col gap-3">
            <div
              className="flex flex-col lg:w-[50%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="flex flex-row px-4 gap-4 items-center justify-between border-b-[1px] pb-2">
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
              <div className="flex flex-row">
                <div className="w-[70%]">{/* <Donuts data={[]} /> */}</div>
                <div className="flex flex-col gap-3 px-[15px] mt-10">
                  {/* <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-10 md:gap-20 sm:gap-6"> */}
                  <div className="flex flex-row gap-1 items-center text-[12px]">
                    <span className="w-[15px] h-[15px] rounded-circle bg-details-color"></span>
                    <span className="text-compare-second-card">Airtel</span>
                    <span className="text-circle-color">0</span>
                  </div>
                  <div className="flex flex-row gap-1 items-center text-[12px]">
                    <span className="w-[15px] h-[15px] rounded-circle bg-cable-bg"></span>
                    <span className="text-compare-second-card">Cable</span>
                    <span className="text-circle-color">0</span>
                  </div>
                  {/* </div> */}
                  {/* <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-10 md:gap-20 sm:gap-6"> */}
                  <div className="flex flex-row gap-1 items-center text-[12px]">
                    <span className="w-[15px] h-[15px] rounded-circle bg-data-bg"></span>
                    <span className="text-compare-second-card">Data</span>
                    <span className="text-circle-color">0</span>
                  </div>
                  <div className="flex flex-row gap-1 items-center text-[12px]">
                    <span className="w-[15px] h-[15px] rounded-circle bg-elect-bg"></span>
                    <span className="text-compare-second-card">
                      Electricity
                    </span>
                    <span className="text-circle-color">0</span>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div
              className="flex flex-col lg:w-[50%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="flex flex-row px-4 gap-4 items-center justify-between border-b-[1px] pb-2">
                <span className="text-[14px]">
                  Active users:{" "}
                  <span style={{ color: "#393939", fontWeight: 700 }}>
                    9900
                  </span>
                </span>
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
              <div className="flex flex-row w-[100%] justify-center items-center pl-2">
                {/* <div className="flex flex-row w-[100%] items-center"> */}
                <AreaChart data={[]} />
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {/* <div className="flex flex-row gap-2 items-center">
              <span className="text-circle-color font-bold">
                Recent Customers
              </span>
            </div> */}
            <div className="flex flex-col border rounded-custom gap-6 py-6">
              <div className="flex flex-row px-4 gap-4 items-center h-[50px] justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-circle-color font-bold">
                    All Transactions
                  </span>
                </div>
                <div className="flex flex-row gap-2 w-[75%] justify-end h-[40px]">
                  <div className=" relative flex flex-row w-[50%]">
                    <div className="absolute top-3 left-4">
                      <Search />
                    </div>
                    <input
                      className="border-input-color border-[1px] rounded-tl-custom rounded-bl-custom w-[85%] outline-none pl-[60px] text-[13px]"
                      placeholder="Search by name,type"
                      onChange={(e) => setSearcher(e.target.value)}
                    />
                    <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                      Search
                    </button>
                  </div>
                  <div className="flex flex-row items-center">
                    <Filtering />
                    <span className="text-[14px]">Filters</span>
                  </div>
                </div>
              </div>
              <Tables report data={[]} />
              <Pagination
                set={activater}
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                paginate={paginate}
                previous={previous}
                next={next}
              />
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-col flex-col gap-3">
            <div
              className="flex flex-col lg:h-[375px] lg:w-[60%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="flex flex-row px-4 gap-4 items-center justify-between border-b-[1px] pb-2">
                <span className="text-[14px]">Transfer Transactions</span>
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
              <div className="flex flex-row">
                <div className="w-[65%]">
                  {/* <ReportDonuts data={[]} /> */}
                </div>
                <div className="flex flex-col gap-6 px-[15px] mt-10">
                  {/* <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-10 md:gap-20 sm:gap-6"> */}
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-1 items-center text-[12px]">
                      <span className="w-[15px] h-[15px] rounded-circle bg-[#263BD4]"></span>
                      <span style={{ color: "#393939", fontSize: 16 }}>
                        Intrabank Transfers
                      </span>
                    </div>
                    <div className="flex flex-row gap-1 text-[10px] ml-4 items-center">
                      <span>
                        <Increases />
                      </span>
                      <span className="text-card-user">{0}%</span>
                      <span>Up from yesterday</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-1 items-center text-[12px]">
                      <span className="w-[15px] h-[15px] rounded-circle bg-[#00D2FF]"></span>
                      <span style={{ color: "#393939", fontSize: 16 }}>
                        Interbank Transfers
                      </span>
                    </div>
                    <div className="flex flex-row gap-1 text-[10px] ml-4 items-center">
                      <span>
                        <Decreases />
                      </span>
                      <span className="text-card-user">{0}%</span>
                      <span>Up from yesterday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col lg:w-[40%] gap-1">
              <div
                className="flex flex-col lg:w-[100%] md:w-[100%] sm:w-[100%] h-[45%] py-4 bg-white border rounded-custom gap-2"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="flex flex-row px-4 gap-4 items-center justify-end border-b-[1px] pb-1">
                  <input
                    type="date"
                    className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                    placeholder="Search by name, customerID, account number, transaction reference"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  {/* </div> */}
                </div>
                <div className="flex flex-col w-[100%] justify-center items-center gap-2 pl-2">
                  <div className="flex flex-col  justify-center items-center">
                    <Mobile />
                    <span>Mobile Users Summary</span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        style={{
                          backgroundColor: "rgba(38, 59, 212, 0.1)",
                          borderRadius: 10,
                          width: "75px",
                          height: "27px"
                        }}
                        className="flex flex-row justify-center items-center text-[10px] text-[#263BD4]"
                      >
                        Downloads
                      </div>
                      <span className="text-black text-[18px]">600</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div
                        style={{
                          backgroundColor: "rgba(0, 210, 255, 0.1)",
                          borderRadius: 10,
                          width: "75px",
                          height: "27px"
                        }}
                        className="flex flex-row justify-center items-center text-[10px] text-[#00D2FF]"
                      >
                        Sign up
                      </div>
                      <span className="text-black text-[18px]">600</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div
                        style={{
                          backgroundColor: "rgba(255, 153, 58, 0.1)",
                          borderRadius: 10,
                          width: "75px",
                          height: "27px"
                        }}
                        className="flex flex-row justify-center items-center text-[10px] text-[#FF993A]"
                      >
                        Usage
                      </div>
                      <span className="text-black text-[18px]">60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col lg:w-[100%] md:w-[100%] sm:w-[100%] h-[45%] py-4 bg-white border rounded-custom gap-2"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="flex flex-row px-4 gap-4 items-center justify-end border-b-[1px] pb-1">
                  <input
                    type="date"
                    className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                    placeholder="Search by name, customerID, account number, transaction reference"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  {/* </div> */}
                </div>
                <div className="flex flex-col w-[100%] justify-center items-center gap-2 pl-2">
                  <div className="flex flex-col justify-center items-center">
                    <Web />
                    <span>Web App Users Summary</span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        style={{
                          backgroundColor: "rgba(38, 59, 212, 0.1)",
                          borderRadius: 10,
                          width: "75px",
                          height: "27px"
                        }}
                        className="flex flex-row justify-center items-center text-[10px] text-[#263BD4]"
                      >
                        Downloads
                      </div>
                      <span className="text-black text-[18px]">600</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div
                        style={{
                          backgroundColor: "rgba(0, 210, 255, 0.1)",
                          borderRadius: 10,
                          width: "75px",
                          height: "27px"
                        }}
                        className="flex flex-row justify-center items-center text-[10px] text-[#00D2FF]"
                      >
                        Sign up
                      </div>
                      <span className="text-black text-[18px]">600</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div
                        style={{
                          backgroundColor: "rgba(255, 153, 58, 0.1)",
                          borderRadius: 10,
                          width: "75px",
                          height: "27px"
                        }}
                        className="flex flex-row justify-center items-center text-[10px] text-[#FF993A]"
                      >
                        Usage
                      </div>
                      <span className="text-black text-[18px]">60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
