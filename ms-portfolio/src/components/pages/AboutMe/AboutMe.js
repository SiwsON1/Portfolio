import React from 'react';
import Transition from '../../features/Transition/Transition';
import Avatar from '../../visuals/Avatar/Avatar';

const AboutMe = () => {


  return (
<>
<Transition />
<div className="relative flex items-center justify-center h-screen">
      <div className="absolute top-0 right-0 z-0">
      </div>
      <div className="relative flex flex-col xl:flex-row p-8 w-full xl:w-[66vw] h-[66vh] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
        <div className="absolute bottom-0 -right-21 xl:w-[433px] xl:h-[577px]">
          <Avatar />
        </div>
        <div className="text-4xl font-bold text-center flex justify-center absolute top-5 left-1/2 transform -translate-x-1/2 ">
          <h1>About Me</h1>
        </div>
        <div className="flex flex-col items-center xl:items-start xl:ml-auto justify-center text-center xl:text-left space-y-2 sm:space-y-4 mt-6 sm:mt-6 md:mt-5 md:space-y-6 xl:space-y-8 w-full xl:w-1/2">
          <div className="mt-2 sm:mt-4 md:mt-6 xl:mt-8 text-white text-sm sm:text-base md:text-lg max-w-xs md:max-w-sm lg:max-w-md">
            <p>
              From an early age, I've been captivated by computers, but it
              wasn't until my college years that I discovered a true passion for
              web development. Since then, every spare moment has been dedicated
              to honing my skills and staying updated with industry trends. I'm
              a self-motivated individual who thrives in dynamic environments.
              Outside of my professional life, I am deeply committed to personal
              growth and well-being, focusing on practices that improve
              mindfulness and physical fitness. I am not just looking for a job,
              but a place where I can continue to grow professionally and
              personally.
            </p>
          </div>
          <a href="/ms_cv.pdf" download>
            <button className="px-8 py-3 text-2xl bg-transparent text-blue-400 font-semibold rounded-full transition duration-200 ease-in-out hover:bg-neon hover:text-black hover:shadow-neon cursor-pointer">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
</>

  );
};

export default AboutMe;