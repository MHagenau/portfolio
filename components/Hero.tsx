import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
import BackgroundCircles from './BackgroundCircles';


const Hero = () => {

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full h-40 w-40 mx-auto object-scale-down'
      src="./Miscellaneous/avatar.png" 
      alt=""/>
      <div className='z-20'>
        <h2 className='text-xl md:text-2xl uppercase text-[#FFE787] pb-2 tracking-[5px]'>Morten Hagenau!</h2>
        <h1 className='text-lg md:text-2xl lg:text-2xl font-semibold px-10'>
          <span>
            <Typewriter
              options={{
                strings: ['Engineer in Energy Technology with passion for data science', 
                          'Currently working with energy consumption data', 
                          'Sectretly enjoys front-end development ...'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
              }}
            />
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Hero