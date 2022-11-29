import { motion, useAnimationControls } from "framer-motion";
const iconAnimationVariants = {
  init: {
    pathLength: 0,
  },
  anim: {
    pathLength: 1,
  },
};

interface Props {
  text: string;
  pathD: string;
}

const AnimatedContactIcons = ({ text, pathD }: Props) => {
  const iconAnimationControls = useAnimationControls();
  return (
    <motion.li
      className="cursor-pointer flex items-center justify-between"
      onHoverStart={() => {
        iconAnimationControls.set(iconAnimationVariants.init);
        iconAnimationControls.start(iconAnimationVariants.anim);
      }}
    >
      <span>{text}</span>
      <svg
        width="30"
        height="25"
        viewBox="0 0 71 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={iconAnimationVariants.anim}
          animate={iconAnimationControls}
          transition={{ duration: 1.5 }}
          fillRule="evenodd"
          clipRule="evenodd"
          d={pathD}
          stroke="white"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    </motion.li>
  );
};

export default AnimatedContactIcons;
