import ProjectSlide from "./ProjectSlide";
import { SplideSlide } from "@splidejs/react-splide";
import ProjectSlider from "./ProjectSlider";
import SlidingHeading from "./SlidingHeading";

const WorkSection = () => {
  return (
    <section className="scroll-mt-20 my-14 xs:my-20 sm:my-20" id="work">
      <SlidingHeading dataText="My Works My Works My Works My Works My Works My Works">
        My Works My Works My Works My Works My Works My Works
      </SlidingHeading>
      <section className="">
        <ProjectSlider>
          <SplideSlide>
            <ProjectSlide
              image="/gaintplay.png"
              brief="We built a whole new platform on the web from scratch, for existing gaintplay users on mobile."
              tags={["UI/UX", "Development"]}
              project_name="Gaintplay"
            />
          </SplideSlide>
          <SplideSlide>
            <ProjectSlide
              image="/blog.png"
              brief="A website for writing and reading blog posts, that supports mardown & syntax highlighting."
              tags={["Development"]}
              project_name="Blog"
            />
          </SplideSlide>
          {/* <SplideSlide>
            <ProjectSlide
              image="/gaintplay.png"
              brief="We built a whole new platform on the web from scratch, for existing gaintplay users on mobile."
              tags={["UI/UX", "Development"]}
              project_name="Gaintplay"
            />
          </SplideSlide> */}
        </ProjectSlider>
      </section>
    </section>
  );
};

export default WorkSection;
