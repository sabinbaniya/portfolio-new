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
    <>
      <div
        className='flex max-w-[45vw] bg-no-repeat bg-cover rounded-2xl min-h-[350px] overflow-hidden hover:cursor-grab active:cursor-grabbing'
        style={{
          backgroundImage: `url(${image})`,
        }}>
        <div className='basis-[40%]'></div>
        <div className='flex flex-col justify-between py-16 pl-72 pr-2 bg-gradient-to-r from-transparent via-gray-800 to-gray-800 space-y-4'>
          <p className='text-4xl font-bold'>{project_name}</p>
          <div className='space-x-2'>
            {tags.map((el, idx) => (
              <ProjectTags key={idx} text={el} />
            ))}
          </div>
          <p className='text-sm'>{brief}</p>
          <div>
            <GradientButton text='View Details' fromProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSlide;
