import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Props {}

const SlidingHeading = (props: Props) => {
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
        style={{ translateX: -translateVal + 100 }}
        data-text="My Works My Works My Works My Works My Works My Works"
        className="secondary_heading_style"
        ref={elRef}
      >
        My Works My Works My Works My Works My Works My Works
      </motion.p>
    </>
  );
};

export default SlidingHeading;
