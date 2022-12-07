import GradientButton from "./GradientButton";
import ProjectTags from "./ProjectTags";

interface Props {
  image: string;
  project_name: string;
  tags: string[];
  brief: string;
}

const ProjectSlide = ({ image, project_name, tags, brief }: Props) => {
  return (
    <div className="px-6 max-w-[100vw]">
      <div
        className="flex flex-col justify-between sm:flex-row mx-auto sm:max-w-[45vw] bg-no-repeat bg-cover rounded-2xl min-h-[350px] max-h-[350px] overflow-hidden hover:cursor-grab active:cursor-grabbing"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="basis-[40%] bg-blue-200"></div>
        <div className=" flex flex-col justify-between pt-12 pb-4 px-4 sm:px-0 sm:py-16 sm:pl-72 pr-2 bg-gradient-to-b sm:bg-gradient-to-r from-transparent via-gray-800 to-gray-800 space-y-4">
          <p className="text-2xl sm:text-4xl font-bold">{project_name}</p>
          <div className="">
            {tags.map((el, idx) => (
              <ProjectTags key={idx} text={el} />
            ))}
          </div>
          <p className="text-sm text-gray-300 font-medium">{brief}</p>
          <div>
            <GradientButton text="View Details" fromProject />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
