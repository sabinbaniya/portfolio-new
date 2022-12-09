import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  dataText: string;
}

const SlidingHeading = ({ dataText, children }: Props) => {
  const [translateVal, setTranslateVal] = useState(0);
  const { scrollY } = useScroll();
  const elRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log(window.innerHeight, elRef.current?.getBoundingClientRect());
      setTranslateVal(latest);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <motion.p
        style={{ translateX: -translateVal }}
        data-text={dataText}
        className="secondary_heading_style"
        ref={elRef}
      >
        {children}
      </motion.p>
    </>
  );
};

export default SlidingHeading;
