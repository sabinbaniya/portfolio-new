import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import { delayForLoading } from "../constants";
import { BlogPosts } from "../types";
import AnimatedContactIcons from "./AnimatedContactIcons";
import Footer, { svgIconDValues } from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
  blogPosts: BlogPosts[];
  fromBlogs?: boolean;
  title?: string;
}

const variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const sidebar = {
  open: {
    height: "100vh",
    width: "100vw",
    transition: { duration: 0.5, type: "spring" },
  },
  closed: {
    height: 0,
    width: 0,
    transition: { delay: 0.6, type: "spring", stiffness: 400, damping: 40 },
  },
};

const sidebarOverlay = {
  open: {
    // opacity: 1,
    scale: 450,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    scale: 0,
    // opacity: 0,
    transition: { duration: 0.5, delay: 0.6 },
  },
};

const MenuItemVariants = {
  open: {
    translateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
    },
  },
  closed: {
    translateX: -1000,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 20,
    },
  },
};
const Layout = ({ children, blogPosts, fromBlogs, title }: Props) => {
  const [showLoader, setShowLoader] = useState(true);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleMenuClick = () => {
    toggleOpen();
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, delayForLoading * 1000);
  }, []);

  return (
    <>
      <AnimatePresence>{showLoader && <Loader />}</AnimatePresence>
      <div
        className={` relative h-[10vh] md:h-[12vh] ${
          isOpen ? "overflow-hidden" : ""
        }`}
      >
        <Navbar fromBlogs={fromBlogs} title={title} isOpen={isOpen} />
        <AnimatePresence>
          {/* background for menu that grows and shrinks  */}
          {isOpen && (
            <>
              <motion.div
                initial={"closed"}
                animate={"open"}
                exit={"closed"}
                variants={sidebar}
                className="rounded-full grid place-items-center top-0 right-0 origin-top-right fixed z-50 sm:hidden"
              >
                <motion.div
                  variants={sidebarOverlay}
                  className="bg-[#0d1520] absolute h-1 w-1 top-9 right-9 rounded-full"
                ></motion.div>
                <motion.div
                  variants={variants}
                  className="text-white z-40 relative left-0 flex flex-col space-y-8 text-6xl font-black"
                >
                  <motion.a
                    variants={MenuItemVariants}
                    onClick={() => handleMenuClick()}
                    href="#home"
                  >
                    Home
                  </motion.a>
                  <motion.a
                    variants={MenuItemVariants}
                    onClick={() => handleMenuClick()}
                    href="#about"
                  >
                    About
                  </motion.a>
                  <motion.a
                    variants={MenuItemVariants}
                    onClick={() => handleMenuClick()}
                    href="#work"
                  >
                    Work
                  </motion.a>
                  <motion.a
                    variants={MenuItemVariants}
                    onClick={() => handleMenuClick()}
                    href="#contact"
                  >
                    Contact
                  </motion.a>
                  <motion.div
                    variants={MenuItemVariants}
                    className="flex space-x-16 px-6 pt-8 "
                  >
                    <AnimatedContactIcons
                      className="scale-[3]"
                      text=""
                      pathD={svgIconDValues.twitter}
                      href="https://twitter.com/sabinbaniya_"
                    />
                    <AnimatedContactIcons
                      className="scale-[3]"
                      text=""
                      pathD={svgIconDValues.github}
                      href="https://github.com/sabinbaniya"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <div className="sm:hidden fixed top-7 z-50 right-5">
          <button
            onClick={() => handleMenuClick()}
            className={`relative h-6 w-8 grid place-items-center z-[60] focus:outline-none`}
          >
            <div
              className={`h-[2px] bg-white absolute transition-all ${
                isOpen ? "rotate-45 top-1 w-4 -left-0 " : "top-0 -left-1 w-5 "
              }`}
            ></div>
            <div
              className={`w-10 h-[2px] bg-white absolute transition-all top-1/2 -translate-y-1/2 ${
                isOpen ? "-rotate-45 w-[35px]" : ""
              }`}
            ></div>
            <div
              className={`h-[2px] bg-white absolute transition-all  ${
                isOpen
                  ? "rotate-45 bottom-0.5 w-4 right-0.5 "
                  : "bottom-0 -right-1 w-5 "
              }`}
            ></div>
          </button>
        </div>
      </div>
      {children}
      <Footer blogPosts={blogPosts} />
    </>
  );
};

export default Layout;
