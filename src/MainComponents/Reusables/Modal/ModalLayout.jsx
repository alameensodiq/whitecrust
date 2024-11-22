import React from "react";

export default function ModalLayout({
  children,
  closeModal,
  maxWidth,
  headings,
  wide
}) {
  return (
    <div
      className={`bg-black bg-opacity-50 w-full fixed top-0 left-0 z-[100000] h-screen overflow-hidden overflow-y-scroll grid place-items-center py-10`}
    >
      <div
        className={`bg-white rounded-[10px] ${
          headings
            ? "w-[80%] max-w-[450px]"
            : wide
            ? "w-[80%] max-w-[630px]"
            : "w-[80%] max-w-[548px]"
        } mb-[70px]`}
        style={{ maxWidth: "60%" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
