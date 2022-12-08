import { motion } from "framer-motion";

interface Props {
  text: string;
  fromProject?: boolean;
}

const GradientButton = ({ text, fromProject }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        bounce: 1,
      }}
      className={`gradient-button text-sm md:text-base py-1.5 px-4 md:px-6 md:py-2 rounded-md transition-all ${
        fromProject ? "gradient-button-extra text-sm" : ""
      }`}
    >
      {text}
    </motion.button>
  );
};

export default GradientButton;
