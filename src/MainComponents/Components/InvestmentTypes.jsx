import React, { useEffect, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import Tables from "../Reusables/Table";
import { ReactComponent as Filter } from "./../../assets/Filter.svg";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import { ReactComponent as Plus } from "./../../assets/Plus.svg";
import { InvestmentHistory } from "../Store/Apis/InvestmentsHistory";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../Reusables/Pagination";
import { Investment } from "../Store/Apis/Investment";

const InvestmentTypes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  const [search, setSearch] = useState("");
  const [activater, setActivater] = useState(1);
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));

  useEffect(() => {
    // if(userData !== undefined && userData !== null){
    dispatch(Investment({ endDate, startDate, currentPage, search }));

    // } else {
    //   navigate("/");
    // }
  }, [endDate, startDate, currentPage, search]);

  const { investment, authenticatinginvestment } = useSelector(
    (state) => state.investment
  );
  console.log(investment?.data?.results);

  const next = investment?.data?.next;
  const previous = investment?.data?.previous;
  const totalPosts = investment?.data?.count;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number);
    setActivater(number);
  };
  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={"Investments"} />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Investment Types
            </span>
            <button className="px-2 flex flex-row gap-1 items-center justify-center bg-route-color w-[17%] rounded-custom text-white font-semibold text-[11px]">
              <Plus />
              Create Investment Type
            </button>
          </div>
          <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
            <div className="flex flex-row justify-between gap-4 px-3">
              <div className="relative flex flex-row w-[50%]">
                <div className="absolute top-3 left-4">
                  <Search />
                </div>
                <input
                  className="border-input-color border-[1px] rounded-custom w-[85%] outline-none pl-[60px] text-[13px]"
                  placeholder="Search by name,type"
                />
              </div>

              <div className="flex flex-row justify-end gap-4 px-3 w-[50%]">
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
                <button className="px-2 flex flex-row gap-1 items-center bg-route-color w-[25%] rounded-custom text-white font-semibold text-[11px]">
                  Download Report <Download />
                </button>
              </div>
            </div>
            <hr className="" />
            <div className="flex flex-row justify-end px-8 gap-2">
              <Filter />
              <span className="text-route-noncolor text-[12px]">Filters</span>
            </div>
            <Tables investmentstypes data={investment?.data?.results} />
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
      </div>
    </div>
  );
};

export default InvestmentTypes;
