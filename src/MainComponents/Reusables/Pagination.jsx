import React, { useState } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  set,
  currentPage,
  support,
  addition
}) => {
  const [news, setNews] = useState(0);
  const [old, setOld] = useState(10);

  // Log values for debugging
  console.log("totalPosts:", totalPosts);
  console.log("postsPerPage:", postsPerPage);

  const validPostsPerPage = Math.max(1, postsPerPage);
  const totalPages =
    totalPosts > 0 ? Math.max(1, Math.ceil(totalPosts / validPostsPerPage)) : 0;

  const PageNumbers = [...Array(totalPages)].map((_, i) => i + 1);
  const recent = PageNumbers.slice(news, Math.min(old, totalPages));

  const backward = () => {
    if (news > 0) {
      const newNews = Math.max(0, news - 10);
      setNews(newNews);
      setOld(Math.min(newNews + 10, totalPages));
    }
  };

  const forward = () => {
    if (old < totalPages) {
      const newNews = Math.min(totalPages - 10, news + 10);
      setNews(newNews);
      setOld(Math.min(newNews + 10, totalPages));
    }
  };

  return (
    <div
      // className={`bg-white flex ${
      //   support
      //     ? "flex-col items-center gap-2 p-2"
      //     : "flex-row justify-between items-center gap-4 p-4"
      // }`}
      className="bg-white flex flex-col lg:flex-row justify-between items-center gap-4 p-4"
    >
      {totalPosts > 0 && (
        <>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-sm font-medium">Showing</span>
            <div className="flex items-center justify-start px-2 border border-gray-300 rounded h-7 w-11 text-center">
              {(currentPage + 1) * validPostsPerPage > totalPosts
                ? totalPosts
                : (currentPage + 1) * validPostsPerPage}
            </div>
            <span className="text-sm font-medium">of</span>
            <span className="text-sm font-medium text-gray-700">
              {totalPosts}
            </span>
          </div>
          <ul className="flex items-center gap-2">
            <div
              className="w-7 h-7 flex items-center justify-center bg-gray-100 text-gray-600 rounded cursor-pointer"
              onClick={backward}
            >
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.00833 11.8274C6.64379 12.192 6.05274 12.192 5.6882 11.8274L1.02082 7.16005C0.656278 6.7955 0.656278 6.20446 1.02082 5.83991L5.6882 1.17254C6.05274 0.807996 6.64379 0.807996 7.00833 1.17254C7.37288 1.53708 7.37288 2.12813 7.00833 2.49267L3.00102 6.49998L7.00833 10.5073C7.37287 10.8718 7.37287 11.4629 7.00833 11.8274Z"
                  fill="#C4C4CA"
                />
              </svg>
            </div>
            {recent.map((page) => (
              <span
                key={page}
                className={`w-7 h-7 flex items-center justify-center rounded cursor-pointer ${
                  set === page
                    ? "bg-button-bg text-white"
                    : "bg-gray-100 text-gray-600 "
                }`}
                onClick={() => paginate(page)}
              >
                {page}
              </span>
            ))}
            <div
              className="w-7 h-7 flex items-center justify-center bg-gray-100 text-gray-600 rounded cursor-pointer"
              onClick={forward}
            >
              <svg
                width="7"
                height="13"
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.629366 1.17246C0.99391 0.807912 1.58495 0.807912 1.9495 1.17246L6.61687 5.83983C6.98142 6.20438 6.98142 6.79542 6.61687 7.15996L1.9495 11.8273C1.58495 12.1919 0.99391 12.1919 0.629366 11.8273C0.264821 11.4628 0.264821 10.8717 0.629366 10.5072L4.63667 6.4999L0.629366 2.49259C0.264821 2.12804 0.264821 1.537 0.629366 1.17246Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default Pagination;
