import Image from "next/image";
import ThreeDHover from "./ThreeDHover";
import { motion } from "framer-motion";
import { delayForLoading } from "../constants";
import PrimaryButton from "./PrimaryButton";
import { useEffect, useState } from "react";
import Dot from "./svgs/Dot";

const floatingImagesTransition = {
  duration: 3,
  yoyo: Infinity,
  ease: "linear",
};

const floatingImagesDragConstraints = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

const greetings = ["Welcome", "Namaste"];

const HeroSection = () => {
  return (
    <section
      className="px-4 flex-col space-y-32 my-14 flex sm:justify-between sm:items-center sm:my-28 scroll-mt-20 xs:max-w-[425px] mx-auto"
      id="home"
    >
      <div className="space-y-8">
        <div className="text-3xl xs:text-4xl sm:text-6xl font-black space-y-3 sm:space-y-4">
          <h1>Hey there</h1>
          <h1 className="leading-normal text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-primary-light-blue to-primary-light-blue">
            {greetings[0]} I&apos;m Sabin
          </h1>
        </div>
        <p className="text-base text-gray-500 font-semibold tracking-wide leading-relaxed flex flex-col sm:items-center sm:space-x-4 space-y-2">
          <span className="whitespace-nowrap">Full-Stack Web Developer</span>{" "}
          <Dot className="hidden" size={5} />
          <span className="whitespace-nowrap">UI/UX Designer</span>
          <Dot className="hidden" size={5} />
          <span className="whitespace-nowrap">I also write about tech</span>
        </p>
        <PrimaryButton
          text="Know More"
          linkProp="#about"
          extraClasses="w-full xs:max-w-[425px]"
        />
      </div>
      <div className="relative max-w-min mx-auto select-none sm:mt-20 sm:mr-20 grid place-items-center w-full">
        <Image
          src="/hero.png"
          className="max-w-[200px] xs:max-w-[300px] pointer-events-none select-none"
          alt=""
          height={1484.47}
          width={982.58}
          priority
        />
        <motion.div
          drag
          dragConstraints={floatingImagesDragConstraints}
          initial={{
            top: -10,
            left: -20,
            position: "absolute",
          }}
          animate={{
            top: 10,
          }}
          transition={{
            delay: delayForLoading,
            ...floatingImagesTransition,
          }}
        >
          <ThreeDHover extraStyles="shadow-teal-500/70">
            <Image
              src="/react.png"
              className="pointer-events-none max-w-[40px] xs:max-w-[50px]"
              alt=""
              height={313}
              width={313}
            />
          </ThreeDHover>
        </motion.div>
        <motion.div
          drag
          dragConstraints={floatingImagesDragConstraints}
          initial={{
            top: -20,
            right: 40,
            position: "absolute",
          }}
          animate={{
            top: -40,
          }}
          transition={{
            delay: delayForLoading,
            ...floatingImagesTransition,
            repeatDelay: 1,
          }}
        >
          <ThreeDHover extraStyles="shadow-gray-500/70">
            <Image
              src="/next.png"
              className="pointer-events-none max-w-[40px] xs:max-w-[50px]"
              alt=""
              height={313}
              width={313}
            />
          </ThreeDHover>
        </motion.div>
        <motion.div
          drag
          dragConstraints={floatingImagesDragConstraints}
          initial={{
            top: 80,
            left: -40,
            position: "absolute",
          }}
          animate={{
            top: 100,
          }}
          transition={{
            delay: delayForLoading,
            ...floatingImagesTransition,
            repeatDelay: 0.75,
          }}
        >
          <ThreeDHover extraStyles="shadow-lime-500/70">
            <Image
              src="/node.png"
              className="pointer-events-none max-w-[40px] xs:max-w-[50px]"
              alt=""
              height={313}
              width={313}
            />
          </ThreeDHover>
        </motion.div>
        <motion.div
          drag
          dragConstraints={floatingImagesDragConstraints}
          initial={{
            top: -60,
            left: 80,
            position: "absolute",
          }}
          animate={{
            top: -80,
          }}
          transition={{
            delay: delayForLoading + 0.1,
            ...floatingImagesTransition,
            repeatDelay: 0.25,
          }}
        >
          <ThreeDHover extraStyles="shadow-blue-500/70">
            <Image
              src="/tailwind.png"
              className="pointer-events-none max-w-[40px] xs:max-w-[50px]"
              alt=""
              height={313}
              width={313}
            />
          </ThreeDHover>
        </motion.div>
        <motion.div
          drag
          dragConstraints={floatingImagesDragConstraints}
          initial={{
            top: -80,
            left: 300,
            position: "absolute",
          }}
          animate={{
            top: -100,
          }}
          transition={{
            delay: delayForLoading + 0.5,
            ...floatingImagesTransition,
            repeatDelay: 0.75,
          }}
        >
          <ThreeDHover extraStyles="shadow-blue-500/70">
            <Image
              src="/vscode.png"
              className="pointer-events-none max-w-[40px] xs:max-w-[50px]"
              alt=""
              height={313}
              width={313}
            />
          </ThreeDHover>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
