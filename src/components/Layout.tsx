import { AnimatePresence } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import { delayForLoading } from "../constants";
import { BlogPosts } from "../types";
import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
  blogPosts: BlogPosts[];
}

const Layout = ({ children, blogPosts }: Props) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, delayForLoading * 1000);
  }, []);

  return (
    <>
      <AnimatePresence>{showLoader && <Loader />}</AnimatePresence>
      <Navbar />
      {children}
      <Footer blogPosts={blogPosts} />
    </>
  );
};

export default Layout;
