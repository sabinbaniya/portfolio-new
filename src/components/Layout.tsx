import { AnimatePresence, motion } from "framer-motion";
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
}

const Layout = ({ children, blogPosts }: Props) => {
  const [showLoader, setShowLoader] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuOptions, setShowMenuOption] = useState(false);

  const handleMenuClick = () => {
    // isOpen & showMenuOption state were used to create staggering children effect
    // with framer motion
    if (isOpen) {
      setShowMenuOption(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 800);
    } else {
      setIsOpen(true);
      setTimeout(() => setShowMenuOption(true), 800);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, delayForLoading * 1000);
  }, []);

  return (
    <>
      <AnimatePresence>{showLoader && <Loader />}</AnimatePresence>
      <div className={` relative h-[10vh] ${isOpen ? "overflow-hidden" : ""}`}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 500,
                }}
                exit={{
                  scale: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="bg-[#0c0a0a] h-1 w-1 rounded-full grid place-items-center top-10 right-8  origin-center fixed z-50"
              ></motion.div>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showMenuOptions && (
            <div className="text-white z-[1000] fixed top-20 left-8 flex flex-col space-y-8 text-6xl font-black">
              <motion.a
                initial={{
                  translateX: -500,
                }}
                animate={{
                  translateX: 0,
                }}
                exit={{
                  translateX: -2000,
                }}
                onClick={() => handleMenuClick()}
                href="#home"
              >
                Home
              </motion.a>
              <motion.a
                initial={{
                  translateX: -500,
                }}
                animate={{
                  translateX: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                exit={{
                  translateX: -2000,
                }}
                onClick={() => handleMenuClick()}
                href="#about"
              >
                About
              </motion.a>
              <motion.a
                initial={{
                  translateX: -500,
                }}
                animate={{
                  translateX: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                exit={{
                  translateX: -2000,
                }}
                onClick={() => handleMenuClick()}
                href="#work"
              >
                Work
              </motion.a>
              <motion.a
                initial={{
                  translateX: -500,
                }}
                animate={{
                  translateX: 0,
                }}
                transition={{
                  delay: 0.6,
                }}
                exit={{
                  translateX: -2000,
                }}
                onClick={() => handleMenuClick()}
                href="#contact"
              >
                Contact
              </motion.a>
              <motion.div
                initial={{
                  translateX: -500,
                }}
                animate={{
                  translateX: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
                exit={{
                  translateX: -2000,
                }}
                className="flex space-x-16 px-6 pt-8 "
              >
                <AnimatedContactIcons
                  className="scale-[3]"
                  text=""
                  pathD={svgIconDValues.twitter}
                />
                <AnimatedContactIcons
                  className="scale-[3]"
                  text=""
                  pathD={svgIconDValues.github}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="sm:hidden fixed top-5 z-50 right-4">
          <button
            onClick={() => handleMenuClick()}
            className={`relative h-6 w-8 grid place-items-center z-[60]`}
          >
            <div
              className={`h-[2px] bg-white absolute transition-all ${
                isOpen ? "rotate-45 top-1 w-4 -left-0 " : "top-0 -left-1 w-5 "
              }`}
            ></div>
            <div
              className={`w-10 h-[2px] bg-white absolute transition-all top-1/2 -translate-y-1/2 ${
                isOpen ? "-rotate-45 w-8" : ""
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
