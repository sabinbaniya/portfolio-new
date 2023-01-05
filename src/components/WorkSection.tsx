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
              image="/project2.png"
              brief="I helped revcash by designing various brand recognition assets for thier mobile app like thier logo, playstore screenshots."
              tags={["Brand Assets Design"]}
              project_name="RevCash"
              href="https://play.google.com/store/apps/details?id=net.revcash"
              gradientClasses="from-neutral-900/10 to-neutral-900"
            />
          </SplideSlide>
        </ProjectSlider>
      </section>
    </section>
  );
};

export default WorkSection;
