import { motion } from "framer-motion";
import ProjectSlide from "./ProjectSlide";
import { SplideSlide } from "@splidejs/react-splide";
import ProjectSlider from "./ProjectSlider";

const WorkSection = () => {
  return (
    <section className='min-h-screen'>
      <motion.p
        // style={{ translateX: -translateVal + 100 }}
        data-text='My Works'
        className='secondary_heading_style'>
        My Works
      </motion.p>
      <section className=''>
        <ProjectSlider>
          <SplideSlide>
            <ProjectSlide
              image='/gaintplay.png'
              brief='We built a whole new platform on the web from scratch, for existing gaintplay users on mobile.'
              tags={["UI/UX", "Development"]}
              project_name='Gaintplay'
            />
          </SplideSlide>
          <SplideSlide>
            <ProjectSlide
              image='/gaintplay.png'
              brief='We built a whole new platform on the web from scratch, for existing gaintplay users on mobile.'
              tags={["UI/UX", "Development"]}
              project_name='Gaintplay'
            />
          </SplideSlide>
          <SplideSlide>
            <ProjectSlide
              image='/gaintplay.png'
              brief='We built a whole new platform on the web from scratch, for existing gaintplay users on mobile.'
              tags={["UI/UX", "Development"]}
              project_name='Gaintplay'
            />
          </SplideSlide>
        </ProjectSlider>
      </section>
    </section>
  );
};

export default WorkSection;
