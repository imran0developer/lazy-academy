import React from "react";
import Image from 'next/image'
import Link from 'next/link';
import CTAButton from "./ctaButton";

export default function Navbar() {

  return (
    <main className="flex w-[90%] m-auto py-8 pb-12 h-auto">
      {/* Title */}
      <h1 className="text-white text-[22px] lg:text-[36px] font-bold mr-auto">Lazy Academy</h1>

      {/* nav items */}
      <div className="hidden w-auto lg:flex items-end justify-end ">
        <Link href={"#introduction"}><h1 className="nav-item mr-16 hover:text-primary">Introduction</h1></Link>
        <Link href={"#courses"}><h1 className="nav-item mr-16 hover:text-primary">Courses</h1></Link>
        <Link href={"#pricing"}><h1 className="nav-item mr-16 hover:text-primary">Pricing</h1></Link>
        {/* <Link href={"#about"}><h1 className="nav-item hover:text-primary">About</h1></Link> */}
      </div>
      <CTAButton title={"Enroll Now"} color={"orange"}></CTAButton>
    </main>
  );
}
