import React from 'react';
import Navbar from './Navbar';
import HR from './HR';

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="lg:min-h-[90vh] h-full w-full xxl:px-16 xl:px-16 md:px-12 sm:px-2 px-4">
        <div className="flex h-full flex-col">
          <div className="flex h-full py-12 flex-col lg:flex-row max-lg:items-center justify-evenly">
            <div className="flex flex-1 py-4 flex-col">
              <h1 className="text-4xl lg:text-6xl">
                Empowering Innovations: Crafting Seamless Android Experiences
              </h1>
              <p className="text-base lg:text-2xl">
                I&apos;m a dedicated Android developer with a passion for
                creating seamless user experiences and cutting-edge mobile
                applications. With a strong foundation in Java and Kotlin.
              </p>
            </div>
            <div className="lg:pl-12 h-full">
              <div className="flex h-full items-center justify-center">
                <img
                  src="./landing.jpg"
                  className="h-72 md:h-96 lg:h-full rounded-xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <HR classes="" />
      </div>
    </>
  );
};

export default Landing;
