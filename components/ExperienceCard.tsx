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
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[350px] md:w-[400px]
                        xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
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
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-scale-down object-center'
        src={imageURL}
        alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>{featureTitle}</h4>
            <h4 className='text-2xl font-light text-[#FFE787]'>{featureSubTitle}</h4>
            <div className='flex space-x-2 my-2'>

                {avatars.map((avatar, i) => (
                    <img key={i} className='mt-2 h-11 w-11 object-scale-down object-bottom' 
                    src={avatar} alt=""/>
                ))}

            </div>
            <div className="mt-5 mb-3 h-0.5 w-70%  bg-[#FFE787]"></div>
            <p>
                {featureDescription}
            </p>
        </div>
    </article>
  )
}

export default ExperienceCard