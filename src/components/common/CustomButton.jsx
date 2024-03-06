import React from "react";

const CustomButton = ({ content }) => {
  return (
    <button className="py-[10px] px-[22px] rounded-[50px] text-white font-Montserrat fw-medium text-base bg-blue-300">
      {content}
    </button>
  );
};

export default CustomButton;
