import React from "react";

const Dot = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size} height={size} rx={size / 2} fill="currentColor" />
    </svg>
  );
};

export default Dot;
