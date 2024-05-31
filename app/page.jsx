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
