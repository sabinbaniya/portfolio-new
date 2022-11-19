import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ThreeDHover from "../src/components/ThreeDHover";
import Navbar from "../src/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sabin Baniya | Personal Portfolio Website</title>
      </Head>
      <>
        <Navbar />
        <section className='px-12'>
          <section className='flex justify-between items-center min-h-[88vh]'>
            <div className='space-y-8'>
              <div className='text-7xl font-black space-y-8 mt-8'>
                <h1>Hey there</h1>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-primary-light-blue to-primary-light-blue'>
                  Welcome, I&apos;m Sabin
                </h1>
              </div>
              <p className='font-normal text-base leading-8 max-w-lg'>
                I&apos;m a full-stack web developer &amp; designer, based in
                Pokhara, Nepal. I have been building things on web since 2020. I
                love building performant & elegant web applications that
                delights all users. Contact me below to discuss your ideas.
              </p>
              <button className='bg-primary-blue px-8 py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-primary-blue/70 transition-all'>
                Know More
              </button>
            </div>
            <div className='relative select-none'>
              <Image
                src='/hero.png'
                className='max-w-[500px] pointer-events-none select-none'
                alt=''
                height={1484.47}
                width={982.58}
              />
              <ThreeDHover extraStyles='-left-8 -top-10'>
                <Image
                  src='/react.png'
                  className='pointer-events-none'
                  alt=''
                  height={313}
                  width={313}
                />
              </ThreeDHover>
              <ThreeDHover extraStyles='-right-8 -top-10'>
                <Image
                  src='/next.png'
                  className='pointer-events-none'
                  alt=''
                  height={313}
                  width={313}
                />
              </ThreeDHover>
              <ThreeDHover extraStyles='-left-4 top-20'>
                <Image
                  src='/node.png'
                  className='pointer-events-none'
                  alt=''
                  height={313}
                  width={313}
                />
              </ThreeDHover>
              <ThreeDHover extraStyles='left-16 -top-24'>
                <Image
                  src='/tailwind.png'
                  className='pointer-events-none'
                  alt=''
                  height={313}
                  width={313}
                />
              </ThreeDHover>
              <ThreeDHover extraStyles='right-20 -top-32'>
                <Image
                  src='/vscode.png'
                  className='pointer-events-none'
                  alt=''
                  height={313}
                  width={313}
                />
              </ThreeDHover>
            </div>
          </section>
        </section>
      </>
    </>
  );
};

export default Home;
