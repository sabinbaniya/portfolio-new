import { motion } from "framer-motion";
import { NodeNextRequest } from "next/dist/server/base-http/node";
const Tick = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <svg
        width="25"
        height="25"
        viewBox="0 0 173 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-[0.8] sm:scale-100"
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
          cx="86.8096"
          cy="86.2937"
          r="73.9194"
          stroke="white"
          strokeWidth="15"
        />
        <motion.path
          initial={{ pathLength: 0, visibility: "hidden" }}
          animate={{ pathLength: 1, visibility: "visible" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          d="M43.4583 90.4616L69.5803 116.584L130.161 56.0037"
          stroke="white"
          strokeWidth="15"
          strokeLinecap="round"
        />
      </svg>
      <motion.p
        initial={{
          opacity: 0,
          width: "0px",
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          width: "140px",
          maxWidth: "1000px",
        }}
        transition={{ delay: 1.5, duration: 0.2 }}
        className="whitespace-nowrap text-xs sm:text-sm"
      >
        Submitted Successfully
      </motion.p>
    </div>
  );
};

export default Tick;
