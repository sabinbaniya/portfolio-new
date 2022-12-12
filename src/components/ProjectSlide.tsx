import GradientButton from "./GradientButton";
import ProjectTags from "./ProjectTags";

interface Props {
  image: string;
  project_name: string;
  tags: string[];
  brief: string;
  gradientClasses?: string;
  href: string;
}

const ProjectSlide = ({
  image,
  project_name,
  tags,
  brief,
  gradientClasses,
  href,
}: Props) => {
  return (
    <div className="px-6 sm:px-0 first:pl-4 last:pl-4 max-w-[100vw] sm:max-w-[50vw] md:max-w-[60vw] lg:max-w-[640px]">
      <div
        className="flex flex-col md:items-stretch justify-between md:flex-row mx-auto bg-no-repeat bg-cover rounded-2xl min-h-[350px] max-h-[350px] overflow-hidden hover:cursor-grab active:cursor-grabbing"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="basis-[40%]"></div>
        <div
          className={`md:basis-[60%] flex flex-col justify-between pt-12 pb-4 px-4 md:px-0 md:py-16 bg-gradient-to-b md:bg-gradient-to-r space-y-4 ${
            gradientClasses || "from-transparent via-gray-800 to-gray-800 "
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {project_name}
          </p>
          <div className="">
            {tags.map((el, idx) => (
              <ProjectTags key={idx} text={el} />
            ))}
          </div>
          <p className="text-sm text-gray-300 font-medium">{brief}</p>
          <div>
            <a href={href}>
              <GradientButton text="Vist Site" fromProject />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
