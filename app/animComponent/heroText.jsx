"use client"
import React from 'react';
import CTAButton from '../components/ctaButton';
import { motion } from 'framer-motion'

const HeroText = () => {

  return (
    <motion.div
      initial={{ marginRight: '30%' }}
      animate={{        
        marginRight: '65%',
        transition: {
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }
      }}
    
     className='flex justify-center md:pb-32 pb-8 lg:justify-start bg-primary lg:h-[100%] items-center pl-8 rounded-tl-[16px] lg:rounded-bl-[16px]  rounded-bl-[0px] rounded-tr-[0px] '>
                    

    {/* text section */}
    <div className='lg:w-[70%] lg:pl-8 px-2 pt-8 md:pt-32 lg:p'>
        <h1 className='text-black font-extrabold text-[36px] leading-[1.2]'> Coding Made <span className='text-orange bg-white p-0'>Fun!</span> </h1>

        <h3 className='text-primarydark font-medium text-[16px] pt-3'>Embrace the art of 'lazy learning' with our playful, innovative courses. Learn to code faster and retain more, all while having fun. It's time to code <span className='text-primarydark font-bold'> the easy way!</span></h3>

        <div className='mt-6'>
            <CTAButton title={"Enroll now"} color={"orange"}></CTAButton>
        </div>

    </div>
    </motion.div>
  );
};

export default HeroText;