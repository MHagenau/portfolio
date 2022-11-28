import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
                           max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-[#FFE787] text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
                      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE787]/80'>
        <ExperienceCard imageURL={'./Technologies/frb.svg'}
                      featureTitle={'Frederiksberg Forsyning A/S'}
                      featureSubTitle={'Data Scientist'}
                      featureDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                      aliquip ex ea commodo consequat.`}
                      avatars={['./Technologies/postgresql.svg',
                                './Technologies/azure.svg',
                                './Technologies/grafana.svg',
                                './Technologies/powerbi.svg',
                                './Technologies/pandas.svg']}/>
        <ExperienceCard imageURL={'./Technologies/ens.svg'}
                      featureTitle={'Danish Energy Agency'}
                      featureSubTitle={'Advicor'}
                      featureDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                      aliquip ex ea commodo consequat.`}
                      avatars={['./Technologies/docker.svg',
                                './Technologies/kubernetes.svg',
                                './Technologies/flask.svg',
                                './Technologies/mongodb.svg',
                                './Technologies/pandas.svg']}/>
      </div>
    </motion.div>
  )
}

export default Experience