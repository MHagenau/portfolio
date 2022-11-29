import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
                   max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-[#FFE787] text-2xl'>
            About
        </h3>

        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ 
            opacity: 1, x:0
        }}
        src='./Technologies/avatar.png'
        className='-mb-20 md:mb-0 flex-shrink-0 w-60 h-60 rounded-full object-scale-down
                   md:rounded-full md:w-95 md:h-95 xl:w-[500px] xl:h-[600px]'/>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'> Morten <span className='underline decoration-[#FFE787]/50'>Hagenau</span></h4>
            <p className='text-base'>
                An engineer of Energy Technology who thrives in an interdisciplinary setting. I see myself as a hardworking team player 
                that revel in projects. When assigned a task, I commit myself to it and do not quit till I am satisfied with the product. 
                I am a fast learner and I have confidence in my capabilities.
            </p>
        </div>
    </motion.div>
  )
}

export default About