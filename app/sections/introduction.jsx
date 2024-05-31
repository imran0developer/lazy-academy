import Image from 'next/image'
import Circles from '../animComponent/circles';

export default function Introduction() {
    return (

        <main className="relative">

            {/* decoration */}
            <Circles></Circles>

            {/* main slide */}
            <div className="px-4 lg:px-20">

                <div className="w-[100%] lg:h-[800px] bg-dark m-auto  rounded-tl-[16px] rounded-[16px] relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">

                    <h1 className="text-white text-[24px] lg:text-[36px] font-bold rounded-tl-[16px] rounded-tr-[16px] bg-primary mr-auto py-8 px-2 lg:px-8 text-center">Simplifying the Complexities of Coding with Lazy Academy
                    </h1>

                    <div className='w-full h-24'></div>

                    <section className="flex flex-col items-center justify-center px-4 lg:pt-8 lg:m-auto">
                    <div className="lg:flex items-center justify-center">
                        <div className=' px-2 lg:px-16 w-full flex items-center justify-end flex-col pb-16 lg:pb-2'>
                        <Image
                            className='introDiv pb-4'
                            src="/confused.png"
                            alt="Confused Vector Image"
                            width={330}
                            height={400}
                        />
                        <p className="text-[18px] text-center">Feeling overwhelmed by the intricate web of coding complexities and challenges?</p>
                        </div>
                        <div className='px-2 lg:px-16 w-full flex items-center justify-start flex-col pb-16 lg:pb-2'>
                        <Image
                            className='introDiv pb-4'
                            src="/edited_learning.png"
                            alt="Fun and Engaging Vector Image"
                            width={330}
                            height={400}
                        />
                        <p className="text-[18px] text-center">Lazy Academy revolutionizes coding education, making it accessible, engaging, and fun.</p>
                        </div>
                        <div className='px-2 lg:px-16 w-full flex items-center justify-end flex-col pb-16 lg:pb-2'>
                        <Image
                            className='introDiv pb-4'
                            src="/success.png"
                            alt="Coding Revolution Vector Image"
                            width={330}
                            height={400}
                        />
                        <p className="text-[18px] text-center">Bid farewell to confusion and frustration; our innovative methods ensure easy comprehension and goal achievement.</p>
                        </div>
                    </div>
</section>

                </div>



            </div>

        </main>

    );
}