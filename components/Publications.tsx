import React from 'react'
import { motion } from 'framer-motion'
import PublicationCard from './PublicationCard';

type Props = {}

function Publications({}: Props) {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
                 max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-[#FFE787] text-2xl'>
            Publications
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
                        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 
                        scrollbar-thumb-[#FFE787]/80'>
          <PublicationCard 
            imageURL={'./Technologies/U44_sketch.png'} 
            publicationTitle={
              `PCM-enhanced building envelope for improved thermal comfort 
               and energy efficiency in danish buildings`
            } 
            publicationDesc={
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.`
            } 
            currPublications={'1'}
            link={'https://doi.org/10.26868/25222708.2021.30266'}
          />

          <PublicationCard 
            imageURL={'./Technologies/brew_tanks.png'} 
            publicationTitle={
              `Agent-based Assessment of Energy Flexibility Potential in the Danish Brewery Industry`
            } 
            publicationDesc={
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.`
            } 
            currPublications={'2'}
            link={'https://doi.org/10.26868/25222708.2021.30266'}
          />

          <PublicationCard 
            imageURL={'./Technologies/schedule_office.png'} 
            publicationTitle={
              `Dynamic modeling and performance evaluation of building 
              envelope enhanced with phase change material under Danish conditions`
            } 
            publicationDesc={
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.`
            } 
            currPublications={'3'}
            link={'https://doi.org/10.1016/j.est.2020.101536'}
          />

          <PublicationCard 
            imageURL={'./Technologies/tool_danBERA.png'} 
            publicationTitle={'DanBERA: A tool for Danish buildings energy renovation design and assessment'} 
            publicationDesc={
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.`
            } 
            currPublications={'4'}
            link={'https://doi.org/10.1088/1757-899X/609/7/072057'}
          />
        </div>

        <div className='w-full absolute top-[30%] bg-[#FFE787]/10 left-0 h-[500px] 
                        -skew-y-12'/>
    </motion.div>
  )
}

export default Publications