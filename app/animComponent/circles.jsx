"use client"
import {motion} from 'framer-motion'

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Circles = () =>{
    return(
        
        <div className='absolute w-full h-full ml-auto pl-8'>
        <div 
         className='bg-white w-[80px] h-[80px] lg:w-[200px] lg:h-[200px] absolute bottom-0 right-8 rounded-[50%] mb-20 flex items-end justify-end'>
            <motion.span

            animate={{
                opacity:1,
                rotate:45,
                transition:{
                    duration:3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease:'linear'
                }
            }} 
            
            className='w-full text- lg:text-[68px] mr-2 text-right font-extrabold text-primary m-auto'>
                "
            </motion.span>
        </div>

        <div
         
         className='bg-white w-[200px] h-[200px] absolute top-0 left-8 rounded-[50%] mt-20 flex items-start justify-start'>
            <motion.span 
            animate={{
            opacity:1,
            rotate:45,
            transition:{
                duration:3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease:'linear'
            }
        }} 
        className='w-full text-[68px] ml-2 text-left font-extrabold text-primary m-auto'>
                "
            </motion.span>
        </div>
    </div>


    );
}
export default Circles;