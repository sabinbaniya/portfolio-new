import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  text: string | ReactNode;
  linkProp?: string;
  extraClasses?: string;
}

const PrimaryButton = ({ text, extraClasses, linkProp }: Props) => {
  return (
    <motion.a
      href={linkProp}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-primary-blue inline-block text-center px-8 py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-primary-blue/70 ${extraClasses}`}
    >
      {text}
    </motion.a>
  );
};

export default PrimaryButton;
