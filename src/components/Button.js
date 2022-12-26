import React from "react";

const Button = ({ styles, children }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-dimWhite
  hover:text-white  bg-red-gradient rounded-[10px] outline-none ${styles}`}>
    {children}
  </button>
);

export default Button;
