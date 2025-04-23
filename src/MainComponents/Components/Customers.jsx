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
import Pagination from "../Reusables/Pagination";
import toast from "react-hot-toast";
import { Loader } from "../Reusables/Loader";

const Customers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(30);
  const [download, setDownload] = useState(false);
  const [activater, setActivater] = useState(1);

  const [searcher, setSearcher] = useState("");
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  useEffect(() => {
    console.log(userData);
    // if(userData !== undefined && userData !== null){
    dispatch(Custom({ searcher, endDate, startDate, currentPage, download }));

    // } else {
    //   navigate("/");
    // }
  }, [userData, searcher, endDate, startDate, currentPage, download]);

  const { custom, authenticatingcustom } = useSelector((state) => state.custom);
  console.log(custom);

  const next = custom?.data?.next;
  const previous = custom?.data?.previous;
  const totalPosts = custom?.data?.count;

  console.log(totalPosts);

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number);
    setActivater(number);
  };

  const handleDownload = () => {
    console.log("Starting download function");

    // Log the current accounts state
    console.log("Current Customer state:", custom);

    // Check if accounts and the results array is available
    if (!custom || !custom.data || !Array.isArray(custom.data.results)) {
      toast.error("Customer data is not loaded yet.");
      return;
    }

    if (custom.data.results.length === 0) {
      toast.error("No data available for download.");
      return;
    }

    // Extract headers from the first item in the results, skipping object values
    const headers = Object.keys(custom.data.results[0]).filter((key) => {
      return typeof custom.data.results[0][key] !== "object";
    });
    console.log("Filtered Headers:", headers);

    // Prepare the header row
    const headerRow = headers.join(",");
    console.log("Header Row:", headerRow);

    // Prepare values for each row
    const rows = custom.data.results
      .map((item) => {
        return headers
          .map((header) => {
            return item[header] !== undefined ? item[header] : "";
          })
          .join(",");
      })
      .join("\n");

    console.log("Filtered Values:", rows);

    // Combine header row and values into CSV format
    const csv = [headerRow, rows].join("\n");
    console.log("CSV Content:", csv);

    // Create Blob and URL for download
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.download = `Customer_Report_${currentPage}.csv`; // Name the file appropriately
    a.href = url;
    document.body.appendChild(a); // Append to body for Firefox support
    a.click();

    // Cleanup
    a.remove();
    URL.revokeObjectURL(url);

    console.log("Download triggered");

    setDownload(false);
  };

  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={"Customers"} />
        </div>

        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Customers
            </span>
            <div className="relative flex flex-row w-[50%]">
              <div className="absolute top-3 left-4">
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
                  setDownload(true);
                  handleDownload();
                }}
                className="flex flex-row px-2 gap-1  bg-route-color w-[12%] rounded-custom text-white font-semibold items-center text-[11px]"
              >
                Download Report <Download />
              </button>
            </div>
            {authenticatingcustom ? (
              <Loader />
            ) : (
              <>
                <Tables
                  currentPage={currentPage}
                  customers
                  data={custom?.data?.results}
                />
                <Pagination
                  set={activater}
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={totalPosts}
                  paginate={paginate}
                  previous={previous}
                  next={next}
                  // addition={custom?.data?.results?.length}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
