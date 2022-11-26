import { url } from "inspector";
import Image from "next/image";
import React from "react";

interface Props {
  image_url: string;
  title: string;
  description: string;
  date: string;
}

const BlogLink = ({ image_url, title, description, date }: Props) => {
  return (
    <>
      <div className='grid grid-cols-3 bg-gray-900 rounded-lg overflow-hidden'>
        <div
          className='bg-center bg-cover'
          style={{
            backgroundImage: `url(${image_url})`,
          }}></div>
        <div className='col-span-2 pl-4 py-2'>
          <p className='font-semibold text-lg'>{title}</p>
          <p className='truncate'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogLink;
