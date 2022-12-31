import Image from "next/image";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  fromBlogs?: boolean;
  title?: string;
}

const Navbar = ({ setIsOpen, isOpen, fromBlogs, title }: Props) => {
  return (
    <>
      <nav className="backdrop-blur-md  border-b border-b-gray-600 fixed top-0 left-0 right-0 z-50 bg-background/20 h-[12vh] max:h-[96px]">
        <div className="h-full flex justify-between items-center xl:max-w-screen-xl xl:mx-auto px-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt=""
              width={100}
              height={100}
              className="w-6 md:w-8"
            />
          </Link>
          {fromBlogs ? (
            <p className="hidden sm:block max-w-[50ch] whitespace-nowrap overflow-hidden text-ellipsis">
              {title}
            </p>
          ) : (
            <>
              <div className="hidden sm:flex text-sm md:text-base justify-between items-center space-x-2 font-semibold">
                <Link
                  scroll={false}
                  href="/#home"
                  className="hover:bg-gray-700 transition-all px-4 py-2 rounded-lg"
                >
                  Home
                </Link>
                <Link
                  scroll={false}
                  href="/#about"
                  className="hover:bg-gray-700 transition-all px-4 py-2 rounded-lg"
                >
                  About
                </Link>
                <Link
                  scroll={false}
                  href="/#work"
                  className="hover:bg-gray-700 transition-all px-4 py-2 rounded-lg"
                >
                  My Works
                </Link>
                <Link
                  href="/blogs"
                  className="hover:bg-gray-700 transition-all px-4 py-2 rounded-lg"
                >
                  Blog
                </Link>
              </div>
              <div className="hidden sm:block font-semibold">
                <Link scroll={false} href="/#contact">
                  <GradientButton text="Contact Me" />
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
