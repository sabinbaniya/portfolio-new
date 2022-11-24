import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ReactNode } from "react";

const ProjectSlider = ({ children }: { children: ReactNode }) => {
  return (
    <Splide
      options={{
        rewind: true,
        keyboard: "global",
        autoWidth: true,
        autoplay: true,
        arrows: false,
        type: "loop",
        padding: "5rem",
        gap: "2rem",
        pagination: false,
      }}>
      {children}
    </Splide>
  );
};

export default ProjectSlider;
