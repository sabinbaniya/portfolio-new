import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "./PrimaryButton";

const AboutSection = () => {
  const { scrollY } = useScroll();
  const scrollRef = useRef({
    top: 0,
    direction: "down",
  });
  const [positionOfMeElementFromR, setPositionOfMeElementFromR] = useState(0);
  const [translateVal, setTranslateVal] = useState(0);
  const meElement = useRef<HTMLSpanElement | null>(null);

  const determineIfScrollShouldStop = (
    windowWidth: number,
    latest: number,
    right?: number,
    top?: number
  ) => {
    // console.log(right, windowWidth, latest);
    if (typeof window === "undefined" || !right || !top) return 0;
    let direction = "down";
    if (scrollRef.current.top < top) {
      direction = "up";
    }
    scrollRef.current = {
      direction,
      top,
    };

    if (scrollRef.current.direction === "up") {
      return -latest;
    }

    if (right < windowWidth) return -windowWidth;

    return -latest;
  };

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // console.log(meElement.current?.getBoundingClientRect());
      // setPositionOfMeElementFromR(
      //   determineIfScrollShouldStop(
      //     window.innerWidth,
      //     latest,
      //     meElement.current?.getBoundingClientRect().right,
      //     meElement.current?.getBoundingClientRect().top
      //   )
      // );

      setTranslateVal(latest);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <section className="scroll-mt-20 px-4" id="about">
      <motion.p
        style={{
          translateX: -translateVal,
        }}
        data-text="Something About Me"
        className="secondary_heading_style"
      >
        Something About <span ref={meElement}>Me</span>
      </motion.p>
      <section className="flex flex-col-reverse justify-center sm:space-x-40 items-start">
        <div className="pr-2 mt-4 ml-2 flex justify-end w-full">
          <Image
            src="/hero5.png"
            height={438}
            width={300}
            className="max-h-[30vh] -mt-20 sm:max-h-[50vh] w-auto"
            alt=""
          />
        </div>
        <div className="sm:max-w-[553px] text-justify space-y-6 text-sm sm:mr-40 mt-4 sm:mt-10 tracking-wide leading-loose sm:font-medium">
          <p>
            Hey there 👋, I&apos;m Sabin Baniya, a full-stack web developer and
            designer based in Pokhara, Nepal. I help people create their online
            presence through their website.{" "}
            {/* . I love building performant &
            elegant web applications that delight all users. */}
            <span className="text-gray-400">
              Apart from work I like travelling & spending time with my friends.
            </span>
          </p>
          <p>
            I&apos;m currently pursing my bachelor&apos;s degree in Software
            Engineering
          </p>
          <PrimaryButton text="See My Work" linkProp="#work" />
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
