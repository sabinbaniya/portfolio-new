import Image from "next/image";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";

const Navbar = () => {
  return (
    <>
      <nav className='backdrop-blur-md flex justify-between items-center px-8 border-b border-b-gray-600 min-h-[12vh] max-h-[12vh] fixed top-0 left-0 right-0 z-50 bg-background/50'>
        <div className='my-4'>
          <Image
            src='/logo.png'
            alt=''
            width={100}
            height={100}
            className='w-8'
          />
        </div>
        <div className='flex justify-between items-center space-x-12 font-semibold'>
          <a href='#about'>About </a>
          <a href='#work'>My Works </a>
          <a href='#blog'>Blog</a>
        </div>
        <div className='font-semibold'>
          <a href='#contact'>
            <GradientButton text='Contact Me' />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
