import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className='backdrop-blur-lg flex justify-between items-center px-8 border-b border-b-gray-600 min-h-[12vh] max-h-[12vh] sticky top-0'>
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
          <a
            href='#contact'
            className='gradient-button px-6 py-2 rounded-md transition-all'>
            Contact Me
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
