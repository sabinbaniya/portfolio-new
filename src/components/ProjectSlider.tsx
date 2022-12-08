import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ReactNode } from "react";

const ProjectSlider = ({ children }: { children: ReactNode }) => {
  return (
    <Splide
      options={{
        rewind: false,
        keyboard: "global",
        autoWidth: true,
        autoplay: false,
        arrows: false,
        type: "loop",
        padding: "",
        gap: "",
        pagination: false,
      }}
    >
      {children}
    </Splide>
  );
};

export default ProjectSlider;
