import React from "react";
import ModalText from "./ModalText";

const ModalInputText = ({
  label,
  placeholder,
  auth,
  name,
  value,
  onChange,
  logo,
  nosign,
  increase,
  disable
}) => {
  return (
    <div className="flex flex-col w-[50%]">
      <div className="flex flex-col items-start justify-start gap-2 w-[100%]">
        <span className="flex items-center gap-2 text-md font-medium leading-5 text-left text-[#1E1B39]">
          {label}
          {!nosign && <span className="text-red-500">*</span>}
        </span>
        <ModalText
          disable={disable}
          increase={increase}
          name={name}
          value={value}
          onChange={onChange}
          auth={auth}
          fixedWidth
          placeholder={placeholder}
          logo={logo}
        />
      </div>
    </div>
  );
};

export default ModalInputText;
