import React from "react";

const Dot = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 5 5`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="5" height="5" rx="2.5" fill="white" />
    </svg>
  );
};

export default Dot;
