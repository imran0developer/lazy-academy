"use client"
import {motion} from 'framer-motion'

import React from 'react'


export default function MovingStripes() {
  return (
    <main>

        <motion.div
        initial={{ translateY: 0 }}
        animate={{
        translateY: ['0%', '-50%', '0%'],
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
        }
        }}
         className='absolute w-full h-full ml-auto pr-8 flex items-end justify-end'>
        <div className='h-[50%] bg-white ml-4 mt-8 bottom-0 w-[5px] '></div>
      </motion.div>

      <motion.div 
      initial={{ translateY: 0 }}
      animate={{
      translateY: ['0%', '50%', '0%'],
      transition: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
      }
      }}
      className='absolute h-full ml-auto pl-8 flex items-end justify-end'>
        <div className='h-[50%] bg-white mr-4 mt-8 bottom-0 w-[5px] m-auto'></div>
      </motion.div>

    </main>
  )
}
