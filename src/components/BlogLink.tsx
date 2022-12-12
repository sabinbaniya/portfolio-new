import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface Props {
  image_url: string;
  title: string;
  description: string;
  date: string;
  link: string[];
}

const BlogLink = ({ image_url, title, description, date, link }: Props) => {
  return (
    <Link
      // href={"/blogs/" + (link !== null ? link[0] : "")}
      href={link[0]}
      target="_blank"
      rel="norefferer noopener"
    >
      <div className="grid grid-cols-3 items-stretch bg-gray-900 rounded-lg overflow-hidden">
        <div
          className="bg-center bg-cover sm:col-span-3 min-h-[5rem] md:col-span-1"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        ></div>
        <div className="col-span-2 px-4 py-3 sm:hidden md:block">
          <span className="font-medium text-sm text-gray-300 clip-text-3-line">
            <ReactMarkdown>{title}</ReactMarkdown>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogLink;
