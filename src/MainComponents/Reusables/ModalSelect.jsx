import React from "react";

const ModalSelect = ({
  options,
  itemer,
  big,
  setItemer,
  onChange,
  value,
  name,
  type
}) => {
  const handleChange = (e) => {
    setItemer(e.target.value);
  };
  console.log(options);

  return (
    <div className="flex flex-wrap relative w-[100%]">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 shadow-sm w-[500px] rounded-lg pl-5 outline-none text-gray-500 bg-white h-[45px] text-[14px]"
      >
        {type ? (
          <option>Select Investment Type</option>
        ) : (
          <option>Select Duration</option>
        )}
        {options?.map((item, index) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModalSelect;
