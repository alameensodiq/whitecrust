import React, { useEffect, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import Tables from "../Reusables/Table";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userData";
import { Transfer } from "../Store/Apis/Transfers";
import Pagination from "../Reusables/Pagination";

const Transfers = () => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  const [ activater, setActivater] = useState(1);

  const White = () => {
    setWhitecrust(true);
    setOther(false);
  };

  const Othering = () => {
    setWhitecrust(false);
    setOther(true);
  };


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searcher, setSearcher] = useState('');
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [startDate, setStartDate] = useState(
    new Date(('2022-01-01'))
  );

  useEffect(() => {
    // if(userData !== undefined && userData !== null){
      dispatch(Transfer({searcher, endDate, startDate, currentPage}))
    // } else {
    //   navigate("/");
    // }
  },[userData, searcher, endDate, startDate, currentPage])

  const { transfers, authenticatingtransfers } = useSelector((state) => state.transfers);
  console.log(transfers)

  const samebank = transfers?.data?.results?.filter((item) => item.bankName === "WhiteCrust")

  const otherbank = transfers?.data?.results?.filter((item) => item.bankName !== "WhiteCrust")

  const next = transfers?.data?.next
  const previous = transfers?.data?.previous
  const totalPosts =  otherbank?.length

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
          <Navbar title={'Transfers'}/>
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Transfers
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
            <div className="flex flex-row justify-between gap-4 px-3">
              <div className="flex flex-col">
                <div className="flex flex-row gap-4 text-[14px] items-center text-route-noncolor font-medium">
                  <span
                    onClick={() => White()}
                    className={`${
                      whitecrust
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    To Whitecrust Account
                  </span>
                  <span
                    onClick={() => Othering()}
                    className={`${
                      other
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    To Other banks
                  </span>
                </div>
                <div className="gap-4">
                    {
                        whitecrust && <div className="w-[150px] h-[2px] bg-route-color" />
                    }
                    {
                        other && <div className="w-[100px] h-[2px] bg-route-color ml-[62%]" />
                    }

                </div>
              </div>
              <div className="flex flex-row justify-between gap-4 px-3">
                <input
                  type="date"
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                />
                <input
                  type="date"
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                />
                <button className="px-2 flex flex-row gap-1 items-center bg-route-color w-[35%] rounded-custom text-white font-semibold text-[11px]">
                  Download Report <Download />
                </button>
              </div>
            </div>
            <Tables transfers data={whitecrust ? samebank  : otherbank}/>
            <Pagination set={activater} currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={whitecrust ? samebank?.length : otherbank?.length} paginate={paginate}   previous={previous} next={next} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfers;
