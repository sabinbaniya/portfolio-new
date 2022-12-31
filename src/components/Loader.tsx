import { motion } from "framer-motion";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
  },
};

const Loader = () => {
  return (
    <motion.section
      exit={{
        opacity: 0,
        backgroundColor: "#070c12",
        scale: 0,
        zIndex: 0,
      }}
      className="fixed inset-0 bg-black z-[60] flex justify-center items-center"
    >
      <svg
        width="33"
        height="58"
        viewBox="0 0 33 58"
        fill="none"
        className="scale-[1.5] sm:scale-[2] xl:scale-[2.5]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2,
            yoyo: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          stroke="white"
          strokeMiterlimit="10"
          fillRule="evenodd"
          clipRule="evenodd"
          // d="M16.398 1.08179L16.0444 0.728149L15.6909 1.08188L2.23521 14.5444L1.88089 14.8989L2.23624 15.2524L26.9107 39.7957L26.9111 39.7952L27.7013 40.5812L14.9536 53.3289L2.19833 40.5802L8.98891 33.7896L8.2818 33.0825L1.13758 40.2267L0.783936 40.5804L1.13767 40.9339L14.6002 54.3896L14.9538 54.743L15.3072 54.3895L28.7629 40.9339L29.1174 40.5794L28.7619 40.2258L4.0875 15.6825L4.0871 15.6829L3.29681 14.8969L16.0446 2.14254L28.7999 14.8979L20.2955 23.4024L21.0026 24.1095L29.8606 15.2514L30.2142 14.8979L29.8606 14.5443L16.398 1.08179Z"
          // d="M18.1052 1.37471L17.0443 0.313782L15.9836 1.37499L2.52795 14.8375L1.465 15.901L2.53105 16.9614L27.2055 41.5047L27.2059 41.5043L27.2852 41.5832L15.9534 52.9149L4.61275 41.5801L10.696 35.4968L8.57472 33.3754L1.4305 40.5197L0.369568 41.5806L1.43077 42.6413L14.8933 56.0969L15.954 57.157L17.0144 56.0966L30.47 42.641L31.5335 41.5775L30.4672 40.5168L5.79275 15.9736L5.79234 15.974L5.71276 15.8948L17.0448 4.55697L28.3858 15.8979L20.5884 23.6953L22.7097 25.8166L31.5677 16.9586L32.6284 15.8979L31.5677 14.8373L18.1052 1.37471Z"
          d="M20.361 23.6174L29.0931 14.8853L15.6554 1.44763L2.26625 14.8368L27.9288 40.4994L14.6852 53.743L1.39307 40.4508L8.47573 33.3682"
          fill="white"
          strokeWidth={2}
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 2,
            duration: 1,
            yoyo: Infinity,
            ease: "easeInOut",
            repeatDelay: 2,
          }}
          exit={{
            stroke: "#000",
          }}
          d="M15.243 8.50958V46.6811"
          stroke="white"
          strokeMiterlimit="10"
          strokeWidth={2}
        />
      </svg>
    </motion.section>
  );
};

export default Loader;
