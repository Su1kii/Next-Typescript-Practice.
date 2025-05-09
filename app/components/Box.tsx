import React, { ReactNode } from "react";
// Reusable Content to apply ClassName

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Box;
