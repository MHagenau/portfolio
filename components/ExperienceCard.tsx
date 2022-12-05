import React from 'react'
import { motion } from "framer-motion"

type Props = {
    imageURL: string
    featureTitle: string
    featureSubTitle: string
    featureDescription: string
    avatars: string[]
}

function ExperienceCard({ imageURL, featureTitle, featureSubTitle, featureDescription, avatars }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[300px] h-[500px] md:w-[500px] md:h-[550px]
                        xl:w-[600px] xl:h-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
                        transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ 
            duration: 1.2 
        }}
        whileInView={{ 
            opacity: 1, y: 0
        }}
        viewport={{ 
            once: true
        }}
        className='w-20 h-20 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-scale-down object-center'
        src={imageURL}
        alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text:lg md:text-xl xl:text-3xl font-light'>{featureTitle}</h4>
            <h4 className='text:base md:text-xl xl:text-3xl font-light text-[#FFE787]'>{featureSubTitle}</h4>
            <div className='flex space-x-2 my-2'>

                {avatars.map((avatar, i) => (
                    <img key={i} className='h-6 w-6 md:w-10 md:h-10 xl:h-15 xl:w-15 object-scale-down object-bottom' 
                    src={avatar} alt=""/>
                ))}

            </div>
            <div className="mt-5 mb-3 h-0.5 w-70%  bg-[#FFE787]"></div>
            <p className='text-xs md:text-sm xl:text-base overflow-y-auto'>
                {featureDescription}
            </p>
        </div>
    </article>
  )
}

export default ExperienceCard