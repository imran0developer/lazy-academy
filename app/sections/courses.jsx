import Image from 'next/image'
import CTAButton from '../components/ctaButton';
import MovingStripes from '../animComponent/movingStripes';

export default function Courses() {

  return (
    <main className="relative">

      {/* decoration */}

      <MovingStripes></MovingStripes>

      {/* main slide */}
      <div className="mx-4 lg:w-[90%] lg:h-[720px] bg-bright lg:m-auto rounded-tl-[16px] rounded-[16px] px-4 lg:px-8 pb-8 lg:pb-4 relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)">

        {/* Title */}
        <div className="w-[260px] lg:w-[460px]">
          <h3 className="pt-8 bg-primary text-black font-extrabold text-[24px] lg:text-[36px]">Fast Track Courses</h3>
        </div>

        <h1 className="text-black text-[16px] lg:text-[20px] font-bold py-8 px-4 lg:px-8 text-center">Experience the ultimate way to master coding skills with our Fast Track programs, designed to accelerate your learning journey.
        </h1>

        {/* courses container */}
        <div className="m-auto lg:flex items-center justify-center text-white">
          <div className="bg-dark shadow-md rounded-[36px] px-4 mx-4 py-4 mb-4 lg:h-[500px] hover:shadow-glow ">
            <div className='px-16 mt-8 w-full flex items-center justify-end flex-col'>
              <Image
                src="/dsa.png"
                alt="dsa"
                width={260}
                height={260}
              /></div>
            <h2 className="mt-4 text-[24px] text-white font-extrabold">Data Structure and Algorithms</h2>
            <ul className="list-disc pl-4">
              <li>Arrays and Strings</li>
              <li>Linked Lists and Stacks</li>
              <li>Trees and Graphs</li>
              <li>Dynamic Programming and more</li>
            </ul>
          </div>

          <div className="bg-dark shadow-md rounded-[36px] px-4 mx-4 py-4 mb-4 lg:h-[500px] hover:shadow-glow">
            <div className='px-16 mt-8 w-full flex items-center justify-end flex-col'>
              <Image
                src="/md.png"
                alt="mobile dev"
                width={260}
                height={260}
              /></div>
            <h2 className="mt-4 text-[24px] text-white font-extrabold">Android App Development</h2>
            <ul className="list-disc pl-4">
              <li>Build engaging Android apps with Java and Kotlin</li>
              <li>Master Android Studio and its tools</li>
              <li>Learn about UI and architecture</li>
              <li>Google Ads, Playstore and more</li>
            </ul>
          </div>

          <div className="bg-dark shadow-md rounded-[36px] px-4 mx-4 py-4 mb-4 lg:h-[500px] hover:shadow-glow">
            <div className='px-16 mt-8 w-full flex items-center justify-end flex-col'>
              <Image
                src="/wd.png"
                alt="web dev"
                width={260}
                height={260}
              /></div>
            <h2 className="mt-4 text-[24px] text-white font-extrabold">Web App Development</h2>
            <ul className="list-disc pl-4">
              <li>Create web apps with HTML, CSS, and JS</li>
              <li>Explore backend development with Node.js</li>
              <li>Learn about Nextjs and React</li>
              <li>Integrate Database and deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}