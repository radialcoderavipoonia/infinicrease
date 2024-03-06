import React from "react";

const CustomButton = ({ content }) => {
  return (
    <button className="custom_button hover:shadow-svg transition-all duration-300 ease-in-out">
      {content}
    </button>
  );
};

export default CustomButton;
