import React from 'react'
import { motion } from "framer-motion"

type Props = {
    imageURL: string
    publicationTitle: string
    publicationDesc: string
    currPublications: string
    link: string
    authors: string
}

function PublicationCard({ imageURL, publicationTitle, publicationDesc, currPublications, link, authors}: Props) {
  const totalPublications = 5
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-8 md:p-44 h-screen'> 
        
        {/*
        <a href={link} target={"_blank"} rel="noreferrer">
            <motion.img
                initial={{ y: -200 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}
                className='w-70 h-70 rounded-2xl xl:w-[1000px] xl:h-[600px] object-scale-down object-center'
                src={imageURL}
                alt=''
            />
        </a>
        */}
        <div className='space-y-2 md:space-y-7 xl:space-y-10 px-0 md:px-10 max-w-4xl'>
            <h4 className='test-sm md:text-2xl xl:text-3xl font-semibold text-center'>
                <span className='underline decoration-[#FFE787]/80'>
                    Publication {currPublications} of {totalPublications}:
                </span>
            </h4>
            <p className='text-xs md:text-lg xl:text-2xl font-semibold text-center'>
            <a href={link} target={"_blank"} rel="noreferrer"> {publicationTitle} </a>
            </p>
            <p className='text-xs md:text-sm xl:text-base  text-left'>
                {publicationDesc}
            </p>
            <p className='text-xs md:text-sm text-right italic'>
                Authors: <br/>
                {authors}
            </p>
        </div>
    </div>
  )
}

export default PublicationCard