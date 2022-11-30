import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";

const AboutSection = () => {
  const { scrollY } = useScroll();
  const [translateVal, setTranslateVal] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setTranslateVal(latest * 1.5);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <section className="scroll-mt-20" id="about">
      <motion.p
        style={{ translateX: -translateVal + 100 }}
        data-text="Something About Me"
        className="secondary_heading_style"
      >
        Something About Me
      </motion.p>
      <section className="flex justify-center space-x-40 items-start">
        <div className="ml-2">
          <Image
            src="/hero5.png"
            height={438}
            width={300}
            className="max-h-[50vh] w-auto"
            alt=""
          />
        </div>
        <div className="max-w-[553px] space-y-6 mr-40 mt-10 tracking-wide leading-loose font-medium">
          <p>
            Hey there 👋, I&apos;m Sabin Baniya, a full-stack web developer and
            designer based in Pokhara, Nepal. I love building performant &
            elegant web applications that delight all users.{" "}
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
