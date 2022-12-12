import { motion } from "framer-motion";
const Tick = ({ text }: { text?: string }) => {
  return (
    <div className="flex justify-center items-center space-x-1 sm:space-x-2">
      {/* <motion.span
        initial={{}}
        animate={{ left: "10%" }}
        transition={{ delay: 1.7, duration: 0.2 }}
        className="absolute left-0"
      > */}
      <svg
        width="25"
        height="25"
        viewBox="0 0 174 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-[0.8] sm:scale-100"
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
          cx="87.1072"
          cy="86.2937"
          r="73.9194"
          stroke="white"
          strokeWidth="15"
        />
        <motion.path
          initial={{ pathLength: 0, visibility: "hidden" }}
          animate={{ pathLength: 1, visibility: "visible" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          d="M55.8477 57.5503L117.747 119.45"
          stroke="white"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0, visibility: "hidden" }}
          animate={{ pathLength: 1, visibility: "visible" }}
          transition={{ delay: 1, duration: 0.5 }}
          d="M117.747 57.5503L55.8477 119.45"
          stroke="white"
          strokeWidth="15"
          strokeLinecap="round"
        />
      </svg>
      {/* </motion.span> */}
      {/* <div className="w-4"></div> */}

      <motion.p
        initial={{
          opacity: 0,
          width: "0px",
          scale: 0,
          // fontSize: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          width: "200px",
          maxWidth: "1000px",
          // fontSize: "14px",
        }}
        transition={{ delay: 1.5, duration: 0.2 }}
        className="whitespace-nowrap text-xs sm:text-sm"
      >
        {text || "Couldn't Submit, Please try again."}
      </motion.p>
    </div>
  );
};

export default Tick;
