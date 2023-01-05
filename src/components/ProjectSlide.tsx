import GradientButton from "./GradientButton";
import ProjectTags from "./ProjectTags";
import ExternalLink from "./svgs/ExternalLink";

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
    <div className="max-w-[100vw] px-6 first:pl-4 last:pl-4 sm:max-w-[50vw] sm:px-0 md:max-w-[60vw] lg:max-w-[640px]">
      <div
        className="flex max-h-[350px] min-h-[350px] items-end  overflow-hidden rounded-2xl bg-cover bg-no-repeat sm:mx-auto sm:justify-between"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          className={`space-y-4 bg-gradient-to-b from-transparent via-background/80 to-background/90 px-4 pt-6 pb-4 sm:flex sm:flex-col sm:justify-between`}
        >
          <p className="text-2xl font-bold drop-shadow-lg sm:text-3xl md:text-4xl">
            {project_name}
          </p>
          <div className="-ml-1">
            {tags.map((el, idx) => (
              <ProjectTags key={idx} text={el} />
            ))}
          </div>
          <p className="text-sm font-semibold text-gray-300">{brief}</p>
          <div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white"
            >
              <span className="">Visit Site</span>{" "}
              <ExternalLink size={16} className="scale-[0.6]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
