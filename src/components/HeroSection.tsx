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
      className="my-14 flex scroll-mt-80 flex-col space-y-32 px-4 xs:mx-auto xs:max-w-[425px] sm:my-28 sm:max-w-none sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-0 lg:my-40 xl:mx-auto xl:max-w-screen-xl"
      id="home"
    >
      <div className="space-y-8 lg:space-y-6">
        <div className="text-3xl font-black xs:text-4xl sm:text-3xl md:text-5xl lg:text-6xl">
          <h1 className="space-y-3 sm:space-y-4">
            <span className="block">Hey there</span>
            <span className="block bg-gradient-to-r from-primary-blue via-primary-light-blue to-primary-light-blue bg-clip-text leading-normal text-transparent">
              {greetings[0]} I&apos;m Sabin
            </span>
          </h1>
        </div>
        <p className="flex flex-col space-y-2 text-base font-semibold leading-relaxed tracking-wide text-gray-500 md:flex-row md:flex-wrap md:items-center md:gap-4 md:space-y-0">
          <span className="whitespace-nowra">Full-Stack Web Developer</span>{" "}
          <Dot className="hidden md:block" size={5} />
          <span className="whitespace-nowra">Dabbling in UI/UX Design</span>
          <Dot className="hidden md:block" size={5} />
          <span className="whitespace-nowra">Always Experimenting</span>
          {/* Building resilient web applications on the web that are pleasent to
          end users & maintainable for the future comers */}
        </p>
        <PrimaryButton
          text="Know More"
          linkProp="#about"
          extraClasses="w-full md:w-auto xs:max-w-[425px] bg-primary-blue"
        />
      </div>
      <div className="relative mx-auto grid w-full max-w-min select-none place-items-center sm:mt-20 lg:mr-20">
        <Image
          src="/hero.png"
          className="pointer-events-none max-w-[200px] select-none xs:max-w-[300px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]"
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
