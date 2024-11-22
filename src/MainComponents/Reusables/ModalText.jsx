import React from "react";

const ModalText = ({
  placeholder,
  reduce,
  auth,
  fixedWidth,
  name,
  value,
  disable,
  onChange = () => {},
  logo,
  increase
}) => {
  console.log(auth);

  // Determine dynamic width, height, and font size
  const inputWidth = "w-[100%]";
  const inputHeight = reduce || auth ? "h-[45px]" : "h-[40px]";
  const fontSize = reduce
    ? "text-[15px]"
    : auth
    ? "text-[14px]"
    : "text-[10px]";

  return (
    <div className={`flex flex-wrap relative w-[80%]`}>
      <input
        name={name}
        disabled={disable}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className={`border border-gray-300 shadow-sm rounded-[8px] pl-5 outline-none text-gray-600 bg-white w-[100%] h-[45px]`}
      />
    </div>
  );
};

export default ModalText;
