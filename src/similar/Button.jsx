import React from "react";
import { cn } from "../utility/cn";

const Button = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          "w-[122px] h-[36px] rounded-full bg-secondary text-primary text-sm font-worksans font-[500] cursor-pointer shadow-btnShadow hover:scale-105 transform transition-all duration-300",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
