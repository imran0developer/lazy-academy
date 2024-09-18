import Image from "next/image";
import Link from "next/link";

import HeroSection from "./sections/heroSection";
import Introduction from "./sections/introduction";
import Courses from "./sections/courses";
import Pricing from "./sections/pricing";
import Footer from "./components/footer";
import Navbar from "./components/navbar";


export default function App() {
  return (

    <main className="m-auto">
      {/* Hero */}
      <div id="hero" className="lg:pb-8">
        <Navbar></Navbar>
        <HeroSection></HeroSection>

        <motion div className=" flex items-center justify-end pr-4 lg:pr-20 mt-2 lg:mt-8 font-medium text-[11px] lg:text-[16px]">
          <h3 className="text-white text-left">What's next? Scroll down to find out </h3>
          <Link href={"#introduction"} className="text-primary ml-2 text-[24px] lg:text-[26px] mb-2">↴</Link>
        </motion>
      </div>


      {/* Feedbacks */}
      <div className="bg-[#303841] flex flex-col items-center justify-center">
        <div className="lg:w-[15%]">
            <h3 className="pt-4 bg-white text-dark font-extrabold text-[36px] text-center">Feedbacks</h3>
        </div>
        <iframe
            src="http://localhost:3000/reviews/embed/lazy-academy?text=black&accent=%23f06525&button=%23f06525&primary=%234ecca3&background=%23303841&cardbg=%234ecca3"
            frameborder="0"
            style={{ width: '90%', height: '320px' }}
          ></iframe>
      </div>

      {/* Introduction */}
      <div id="introduction" className="lg:pb-8 pt-4 lg:pt-16">
        <Introduction></Introduction>
        <div className=" flex items-center justify-end pr-4 lg:pr-20 mt-4 lg:mt-8 font-medium text-[11px] lg:text-[16px]">
          <h3 className="text-white text-left">Still confused? scroll down, I've got you</h3>
          <Link href={"#courses"} className="text-primary ml-2 text-[24px] lg:text-[26px] mb-2">↴</Link>
        </div>
      </div>

      {/* Courses */}
      <div id='courses' className="lg:pb-8 pt-4 lg:pt-16">
        <Courses></Courses>
        <div className=" flex items-center justify-end pr-4 lg:pr-20 mt-4 lg:mt-8 font-medium text-[11px] lg:text-[16px]">
          <h3 className="text-white text-left">Okay.. now tell me what's price for it</h3>
          <Link href={"#pricing"} className="text-primary ml-2 text-[24px] lg:text-[26px] mb-2">↴</Link>
        </div>

      </div>

      {/* Pricing */}
      <div id='pricing' className="lg:pb-8 pt-4 lg:pt-16">
        <Pricing></Pricing>
        <div className=" flex items-center justify-end pr-4 lg:pr-20 mt-4 lg:mt-8 font-medium text-[11px] lg:text-[16px]">
          <h3 className="text-white text-left">If you haven't enrolled yet, let me tell you something..</h3>
          <Link href={"#hero"} className="text-primary ml-2 text-[24px] lg:text-[26px] mb-2">⇡</Link>
        </div>
        
      </div>


      {/* Footer */}
      <Footer></Footer>


    </main>

  );
}
