import React, { ReactNode, useEffect, useRef } from "react";
interface Props {
  children: ReactNode;
  extraStyles: string;
}

const ThreeDHover = ({ children, extraStyles }: Props) => {
  const elem = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    /* Store the element in el */
    let el = elem.current;
    if (!el) return;

    /* Get the height and width of the element */
    const height = el.clientHeight;
    const width = el.clientWidth;

    /*
     * Add a listener for mousemove event
     * Which will trigger function 'handleMove'
     * On mousemove
     */
    el.addEventListener("mousemove", handleMove);

    /* Define function a */
    function handleMove(e: any) {
      /*
       * Get position of mouse cursor
       * With respect to the element
       * On mouseover
       */
      /* Store the x position */
      const xVal = e.layerX;
      /* Store the y position */
      const yVal = e.layerY;

      /*
       * Calculate rotation valuee along the Y-axis
       * Here the multiplier 20 is to
       * Control the rotation
       * You can change the value and see the results
       */
      const yRotation = 40 * ((xVal - width / 2) / width);

      /* Calculate the rotation along the X-axis */
      const xRotation = -40 * ((yVal - height / 2) / height);

      /* Generate string for CSS transform property */
      const string =
        "perspective(500px) scale(1.05) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";

      /* Apply the calculated transformation */
      if (el) el.style.transform = string;
      //   if (el) el.style.transition = "ease-in-out 0.5s linear";
    }

    /* Add listener for mouseout event, remove the rotation */
    el.addEventListener("mouseout", function () {
      if (el)
        el.style.transform =
          "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });

    /* Add listener for mousedown event, to simulate click */
    el.addEventListener("mousedown", function () {
      if (el)
        el.style.transform =
          "perspective(500px) scale(0.95) rotateX(0) rotateY(0)";
    });

    /* Add listener for mouseup, simulate release of mouse click */
    el.addEventListener("mouseup", function () {
      if (el)
        el.style.transform =
          "perspective(500px) scale(1.05) rotateX(0) rotateY(0)";
    });
  }, [elem]);

  return (
    <div
      ref={elem}
      className={`max-w-[70px] select-none transition-all duration-500 absolute ${extraStyles}`}>
      {children}
    </div>
  );
};

export default ThreeDHover;
