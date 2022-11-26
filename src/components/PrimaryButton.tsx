import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  text: string | ReactNode;
  extraClasses?: string;
}

const PrimaryButton = ({ text, extraClasses }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-primary-blue px-8 py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-primary-blue/70 ${extraClasses}`}>
      {text}
    </motion.button>
  );
};

export default PrimaryButton;
