import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../src/components/Navbar";
import Loader from "../src/components/Loader";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { delayForLoading } from "../src/constants";
import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import WorkSection from "../src/components/WorkSection";
import ContactSection from "../src/components/ContactSection";

const Home: NextPage = () => {
  const [showLoader, setShowLoader] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowLoader(false);
  //   }, delayForLoading * 1000);
  // }, []);

  return (
    <>
      <Head>
        <title>Sabin Baniya | Personal Portfolio Website</title>
      </Head>
      <>
        <AnimatePresence>{showLoader && <Loader />}</AnimatePresence>
        <Navbar />
        <section className='px-12 pt-[12vh]'>
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
        </section>
      </>
    </>
  );
};

export default Home;
