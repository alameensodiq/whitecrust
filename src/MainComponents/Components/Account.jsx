import React, { useEffect, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import Tables from "../Reusables/Table";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userData";
import { Custom } from "../Store/Apis/Custom";
import { Accounts } from "../Store/Apis/Accounts";
import Pagination from "../Reusables/Pagination";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  const [ activater, setActivater] = useState(1);

  const [searcher, setSearcher] = useState('');
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [startDate, setStartDate] = useState(
    new Date(('2022-01-01'))
  );
  useEffect(() => {
    console.log(userData)
    // if(userData !== undefined && userData !== null){
      dispatch(Accounts({searcher, endDate, startDate, currentPage}))
      
    // } else {
    //   navigate("/");
    // }
  },[userData, searcher, endDate, startDate, currentPage])


  const { accounts, authenticatingaccounts } = useSelector((state) => state.accounts);
  console.log(accounts)

  const next = accounts?.data?.next
  const previous = accounts?.data?.previous
  const totalPosts = accounts?.data?.count

  const paginate = (number) => {
    //  setSorted(tran)
     setCurrentPage(number)
     setActivater(number)
  }
  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={' Account'}/>
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Account Upgrade
            </span>
            <div className="relative flex flex-row w-[50%]">
                <div className="absolute top-3 left-4" >
                    <Search />
                </div>
              <input
                className="border-input-color border-[1px] rounded-tl-custom rounded-bl-custom w-[85%] outline-none pl-[60px] text-[13px]"
                placeholder="Search by name, customerID, account number, transaction reference"
                onChange={(e) => setSearcher(e.target.value)}
              />
              <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                Search 
              </button>
            </div>
          </div>
          <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
            <div className="flex flex-row justify-end gap-4 px-3">
                <input
                  type='date'
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                />
                <input
                  type='date'
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                />
                <button className="flex flex-row px-2 gap-1  bg-route-color w-[12%] rounded-custom text-white font-semibold items-center text-[11px]">
                   Download Report <Download />
                </button>
            </div>
            <Tables account data={accounts?.data?.results}/>
            <Pagination set={activater} currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}   previous={previous} next={next} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
