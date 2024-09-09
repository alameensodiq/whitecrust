import React from "react";

const InputLabel = ({ placeholder, label, onChange, name, value }) => {
  return (
    <div className="relative flex flex-col items-center lg:w-[50%] pt-3">
      <span className="absolute bottom-11 left-5 bg-white text-[12px]">
        {label}
      </span>
      <input
        onChange={(e) => onChange(e)}
        name={name}
        value={value}
        type="text"
        className="w-[400px] h-[52px] border border-custom-bg gap-[3px] rounded-custom text-[12px] font-inter leading-[24px] text-custom-bg px-[12px] focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputLabel;
