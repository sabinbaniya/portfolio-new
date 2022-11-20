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
      className='fixed inset-0 bg-black z-10 flex justify-center items-center'>
      <svg
        width='33'
        height='58'
        viewBox='0 0 33 58'
        fill='none'
        className='scale-[2]'
        xmlns='http://www.w3.org/2000/svg'>
        <motion.path
          variants={icon}
          initial='hidden'
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2,
            yoyo: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          stroke='white'
          stroke-miterlimit='10'
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M18.1051 1.85836L17.0442 0.797424L15.9835 1.85863L2.52788 15.3212L1.46494 16.3847L2.53099 17.445L27.2054 41.9883L27.2058 41.9879L27.2851 42.0668L15.9534 53.3986L4.61269 42.0637L10.696 35.9804L8.57466 33.8591L1.43044 41.0033L0.369507 42.0642L1.43071 43.1249L14.8933 56.5805L15.9539 57.6407L17.0143 56.5803L30.47 43.1246L31.5334 42.0611L30.4671 41.0005L5.79269 16.4572L5.79228 16.4576L5.71269 16.3785L17.0447 5.04061L28.3857 16.3816L20.5883 24.1789L22.7096 26.3003L31.5677 17.4422L32.6283 16.3816L31.5677 15.3209L18.1051 1.85836Z'
          fill='white'
        />
        <motion.path
          variants={icon}
          initial='hidden'
          animate='visible'
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
          d='M16.7062 10.6012V48.7727'
          stroke='white'
          stroke-miterlimit='10'
        />
      </svg>
    </motion.section>
  );
};

export default Loader;
