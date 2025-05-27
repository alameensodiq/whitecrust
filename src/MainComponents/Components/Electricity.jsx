import React, { useEffect, useState } from "react";
import { ReactComponent as Filter } from "./../../assets/Filter.svg";
import Tables from "../Reusables/Table";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import Pagination from "../Reusables/Pagination";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userData";
import { useNavigate } from "react-router-dom";
import { Electricities } from "../Store/Apis/Electricities";
import { Loader } from "../Reusables/Loader";

const Electricity = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
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
    dispatch(
      Electricities({ searcher, endDate, startDate, currentPage, download })
    );

    // } else {
    //   navigate("/");
    // }
  }, [userData, searcher, endDate, startDate, currentPage, download]);

  const { electricities, authenticatingelectricities } = useSelector(
    (state) => state.electricities
  );
  console.log(electricities);

  const next = electricities?.data?.next;
  const previous = electricities?.data?.previous;
  const totalPosts = electricities?.data?.count;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number);
    setActivater(number);
  };

  // const handleDownload = () => {
  //   console.log("Starting download function");

  //   // Log the current accounts state
  //   console.log("Current electricitieser state:", electricities);

  //   // Check if accounts and the results array is available
  //   if (
  //     !electricities ||
  //     !electricities.data ||
  //     !Array.isArray(electricities.data.results)
  //   ) {
  //     toast.error("electricitieser data is not loaded yet.");
  //     return;
  //   }

  //   if (electricities.data.results.length === 0) {
  //     toast.error("No data available for download.");
  //     return;
  //   }

  //   // Extract headers from the first item in the results, skipping object values
  //   const headers = Object.keys(electricities.data.results[0]).filter((key) => {
  //     return typeof electricities.data.results[0][key] !== "object";
  //   });
  //   console.log("Filtered Headers:", headers);

  //   // Prepare the header row
  //   const headerRow = headers.join(",");
  //   console.log("Header Row:", headerRow);

  //   // Prepare values for each row
  //   const rows = electricities.data.results
  //     .map((item) => {
  //       return headers
  //         .map((header) => {
  //           return item[header] !== undefined ? item[header] : "";
  //         })
  //         .join(",");
  //     })
  //     .join("\n");

  //   console.log("Filtered Values:", rows);

  //   // Combine header row and values into CSV format
  //   const csv = [headerRow, rows].join("\n");
  //   console.log("CSV Content:", csv);

  //   // Create Blob and URL for download
  //   const blob = new Blob([csv], { type: "text/csv" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");

  //   a.download = `electricitieser_Report_${currentPage}.csv`; // Name the file appropriately
  //   a.href = url;
  //   document.body.appendChild(a); // Append to body for Firefox support
  //   a.click();

  //   // Cleanup
  //   a.remove();
  //   URL.revokeObjectURL(url);

  //   console.log("Download triggered");

  //   setDownload(false);
  // };

  const handleDownload = () => {
    console.log("Starting download function");

    if (
      !electricities ||
      !electricities.data ||
      !Array.isArray(electricities.data.results)
    ) {
      toast.error("Dataset is not loaded yet.");
      return;
    }

    if (electricities.data.results.length === 0) {
      toast.error("No data available for download.");
      return;
    }

    const fieldsToRemove = [
      "Error Type",
      "Notes",
      "responseMessage",
      "reference",
      "user"
    ];

    const cleanedData = electricities.data.results.map((item) => {
      const newItem = { ...item };

      // Extract user.name as userName if available
      if (item.user && item.user.name) {
        newItem.userName = item.user.name;
      }

      // Remove unwanted fields
      fieldsToRemove.forEach((field) => {
        delete newItem[field];
      });

      return newItem;
    });

    const headers = Object.keys(cleanedData[0]);
    const headerRow = headers.join(",");

    const rows = cleanedData
      .map((item) =>
        headers
          .map((header) => (item[header] !== undefined ? item[header] : ""))
          .join(",")
      )
      .join("\n");

    const csv = [headerRow, rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.download = `Electricity_${currentPage}.csv`;
    a.href = url;
    document.body.appendChild(a);
    a.click();
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
          <Navbar title={"Electricity"} />
        </div>
        {authenticatingelectricities ? (
          <Loader />
        ) : (
          <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
            <div className="flex flex-row justify-between">
              <span className="text-route-name text-[28px] font-semibold">
                Electricity
              </span>
              <div className="relative flex flex-row w-[50%]">
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
                  className="px-2 flex flex-row gap-1 items-center bg-route-color w-[12%] rounded-custom text-white font-semibold text-[11px]"
                >
                  Download Report <Download />
                </button>
              </div>
              {/* <hr className='' />
         <div className="flex flex-row justify-end px-8 gap-2">
             <Filter />
             <span className='text-route-noncolor text-[12px]'>Filters</span> 
         </div> */}
              <Tables airtime data={electricities?.data?.results} />
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
        )}
      </div>
    </div>
  );
};

export default Electricity;
