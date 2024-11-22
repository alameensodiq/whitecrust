import ModalLayout from "./ModalLayout";
import React from "react";
import { ReactComponent as Cancel } from "../../../assets/cancel.svg";

export default function AppModal({
  children,
  heading,
  closeModal,
  maxWidth,
  headingSize,
  step,
  currentStep,
  confirm,
  headings,
  hr,
  nut,
  pdf,
  Unread,
  Archived,
  mark,
  noheadborder,
  subscribe,
  wide
}) {
  console.log(subscribe);
  return (
    <div
      className={`transition-opacity duration-300 ${
        step === currentStep
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } relative z-[9000]`}
    >
      <ModalLayout
        wide={wide}
        headings={headings}
        maxWidth={maxWidth}
        closeModal={closeModal}
      >
        <div className={`relative`}>
          <div className={`w-full flex  items-center  px-2 `}>
            <div className="flex items-center justify-between px-10 py-5 w-full">
              <div className="w-1/2  justify-start">
                <div className={`text-[15px] font-semibold text-[#1E1B39]`}>
                  {heading}
                </div>
              </div>
              <div className="w-1/2 flex justify-end">
                <Cancel
                  onClick={() => {
                    closeModal();
                  }}
                />
                {/* <svg
                  onClick={() => {
                    closeModal();
                  }}
                  className="cursor-pointer"
                  width="30"
                  height="32"
                  viewBox="0 0 40 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5002 9.99224C30.1888 9.66455 29.7661 9.48039 29.3252 9.48039C28.8843 9.48039 28.4616 9.66455 28.1502 9.99224L20.0002 18.5322L11.8502 9.97474C11.5388 9.64705 11.1161 9.46289 10.6752 9.46289C10.2343 9.46289 9.81158 9.64705 9.5002 9.97474C8.8502 10.6572 8.8502 11.7597 9.5002 12.4422L17.6502 20.9997L9.5002 29.5572C8.8502 30.2397 8.8502 31.3422 9.5002 32.0247C10.1502 32.7072 11.2002 32.7072 11.8502 32.0247L20.0002 23.4672L28.1502 32.0247C28.8002 32.7072 29.8502 32.7072 30.5002 32.0247C31.1502 31.3422 31.1502 30.2397 30.5002 29.5572L22.3502 20.9997L30.5002 12.4422C31.1335 11.7772 31.1335 10.6572 30.5002 9.99224Z"
                    fill="#a9a8a8"
                  />
                </svg> */}
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col gap-3 items-center justify-center ${
              heading ? "pt-[30px]" : "pt-[10px]"
            } pb-[30px]`}
          >
            {children}
          </div>
        </div>
      </ModalLayout>
    </div>
  );
}
