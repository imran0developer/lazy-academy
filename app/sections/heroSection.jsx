import Image from 'next/image'
import CTAButton from '../components/ctaButton';
import HeroText from '../animComponent/heroText';


export default function HeroSection() {

    return (
        <main className='lg:w-full flex items-center justify-center px-4 lg:px-20'>

        <div className="lg:flex items-center w-[100%] lg:h-[680px] bg-bright m-auto rounded-[16px] relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">

            <HeroText></HeroText>

            {/* <div className='flex justify-center md:pb-32 pb-8 lg:justify-start lg:w-[61%] bg-primary lg:h-[100%] items-center pl-8 rounded-tl-[16px] rounded-tr-[16px] lg:rounded-tr-[0px] lg:rounded-bl-[16px]  rounded-bl-[0px] '>
                
                <div className='lg:w-[70%] lg:pl-8 px-2 pt-8 md:pt-32 lg:p'>
                    <h1 className='text-black font-extrabold text-[36px] leading-[1.2]'> Coding Made <span className='text-orange bg-white p-0'>Fun!</span> </h1>

                    <h3 className='text-primarydark font-medium text-[16px] pt-3'>Embrace the art of 'lazy learning' with our playful, innovative courses. Learn to code faster and retain more, all while having fun. It's time to code <span className='text-primarydark font-bold'> the easy way!</span></h3>

                    <div className='mt-6'>
                        <CTAButton title={"Enroll now"} color={"orange"}></CTAButton>
                    </div>

                </div>
            </div> */}
           
            {/* Image container */}
            <div className="w-full absolute flex justify-end items-center
            lg:items-end pr-8 ">
            
                <Image
                className=''
                width={750}
                height={700}
                src="/students.png"
                alt="Your Image"
                />
            </div>


            {/* mobile Image container */}
            <div className="lg:hidden flex justify-end items-end 
            lg:items-center pr-8">
            
                <Image
                width={750}
                height={700}
                src="/students.png"
                alt="Your Image"
                />
            
            </div>

        </div>
        

        </main>

    );
}
