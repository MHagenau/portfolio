import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>        
        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            viewport={{ 
                once: true
            }}
            className='flex flex-row items-center text-gray-300'>
            
            <Link href="/#hero">
                <button className='heroButton'>Home</button>
            </Link>
            
            <Link href="/#about">
                <button className='heroButton'>About</button>
            </Link>

            <Link href="/#experience">
                <button className='heroButton'>Experience</button>
            </Link>

            <Link href="/#publications">
                <button className='heroButton'>Publications</button>
            </Link>

        </motion.div>
    </header>
  )
}