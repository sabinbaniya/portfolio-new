import React from "react";

const Dot = ({ size, className }: { size: number; className?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width={size} height={size} rx={size / 2} fill="currentColor" />
    </svg>
  );
};

export default Dot;
