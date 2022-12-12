import ProjectSlide from "./ProjectSlide";
import { SplideSlide } from "@splidejs/react-splide";
import ProjectSlider from "./ProjectSlider";
import SlidingHeading from "./SlidingHeading";

const WorkSection = () => {
  return (
    <section
      className="scroll-mt-20 my-14 xs:my-20 sm:my-20 xl:work-container "
      id="work"
    >
      <SlidingHeading dataText="My Works My Works My Works My Works My Works My Works">
        My Works My Works My Works My Works My Works My Works
      </SlidingHeading>
      <section className="lg:mt-10">
        <ProjectSlider>
          <SplideSlide>
            <ProjectSlide
              image="/gaintplay.png"
              brief="We built a whole new platform on the web from scratch, for existing gaintplay users on mobile."
              tags={["UI/UX", "Development"]}
              project_name="Gaintplay"
              href="https://gaintplay.com"
            />
          </SplideSlide>
          <SplideSlide>
            <ProjectSlide
              image="/blog.png"
              brief="A website for writing and reading blog posts, that supports mardown & syntax highlighting."
              tags={["Development"]}
              project_name="Blog"
              href="https://reimageined-telegram.vercel.app"
            />
          </SplideSlide>
          {/* <SplideSlide>
            <ProjectSlide
              image="/smart-pdr.png"
              brief="Built the new website to better represent smartpdr as a paintless dent repair company"
              tags={["Design", "Development"]}
              project_name="Smart PDR"
              href="https://smartpdr.us"
              gradientClasses="from-transparent via-gray-700 to-gray-800"
            />
          </SplideSlide> */}
        </ProjectSlider>
      </section>
    </section>
  );
};

export default WorkSection;
