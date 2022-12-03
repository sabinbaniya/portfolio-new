import Image from "next/image";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="backdrop-blur-md flex justify-between items-center px-12 border-b border-b-gray-600 min-h-[12vh] max-h-[12vh] fixed top-0 left-0 right-0 z-50 bg-background/50">
        <div className="my-4">
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={100}
            className="w-8"
          />
        </div>
        <div className="flex justify-between items-center space-x-2 font-semibold">
          <a
            href="#about"
            className="hover:bg-gray-700 transition-all px-4 py-2 rounded-lg"
          >
            About
          </a>
          <a
            href="#work"
            className="hover:bg-gray-700 transition-all px-4 py-2 rounded-lg"
          >
            My Works
          </a>
          <Link
            href="/blogs"
            className="hover:bg-gray-700 transition-all px-4 py-2 rounded-lg"
          >
            Blog
          </Link>
        </div>
        <div className="font-semibold">
          <a href="#contact">
            <GradientButton text="Contact Me" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
