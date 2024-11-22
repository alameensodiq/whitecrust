import React from "react";
import ModalSelect from "./ModalSelect";

const ModalBoxSelect = ({
  label,
  placeholder,
  auth,
  name,
  value,
  onChange,
  logo,
  photo,
  onClick,
  options,
  big,
  itemer,
  setItemer,
  type
}) => {
  return (
    <div className="flex flex-col  w-[50%]">
      <div className="flex flex-col items-start justify-start gap-2 w-[80%]">
        <label className="flex flex-row gap-2 text-[14px] font-medium leading-[20px] text-[#1e1b39]">
          {label}
          <span className="text-red-500">*</span>
        </label>

        <ModalSelect
          type={type}
          big={big}
          itemer={itemer}
          setItemer={setItemer}
          options={options}
          name={name}
          value={value}
          onChange={onChange}
          auth={auth}
          placeholder={placeholder}
          logo={logo}
        />
      </div>
    </div>
  );
};

export default ModalBoxSelect;
