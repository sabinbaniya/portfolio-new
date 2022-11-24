import { motion } from "framer-motion";

interface Props {
  text: string;
}

const PrimaryButton = ({ text }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className='bg-primary-blue px-8 py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-primary-blue/70'>
      {text}
    </motion.button>
  );
};

export default PrimaryButton;
