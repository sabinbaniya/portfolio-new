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
      className="flex justify-between items-center min-h-[88vh] scroll-mt-20"
      id="home"
    >
      <div className="space-y-8">
        <div className="text-6xl font-black space-y-4">
          <h1>Hey there</h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-primary-light-blue to-primary-light-blue">
            {greetings[0]} I&apos;m Sabin
          </h1>
        </div>
        <p className="text-base text-gray-500 font-semibold tracking-wide leading-relaxed flex items-center space-x-4">
          {/* I&apos;m a full-stack web developer &amp; designer, based in Pokhara,
          Nepal. I have been building things on web since 2020. I love building
          performant & elegant web applications that delights all users. Contact
          me below to discuss your ideas. */}
          <span className="whitespace-nowrap">Full-Stack Web Developer</span>{" "}
          <Dot size={5} />
          <span className="whitespace-nowrap">UI/UX Designer</span>
          <Dot size={5} />
          <span className="whitespace-nowrap">Tech Writer</span>
        </p>
        <PrimaryButton text="Know More" linkProp="#about" />
      </div>
      <div className="relative select-none mt-20">
        <Image
          src="/hero.png"
          className="max-w-[500px] pointer-events-none select-none"
          alt=""
          height={1484.47}
          width={982.58}
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
              className="pointer-events-none max-w-[70px]"
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
              className="pointer-events-none max-w-[70px]"
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
              className="pointer-events-none max-w-[70px]"
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
              className="pointer-events-none max-w-[70px]"
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
              className="pointer-events-none max-w-[70px]"
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
