import React from "react";

interface Props {
  text: string;
}

const ProjectTags = ({ text }: Props) => {
  return (
    <span className="text-sm md:text-base bg-primary-blue font-bold rounded-full py-1 px-4 m-1 inline-block">
      {text}
    </span>
  );
};

export default ProjectTags;
