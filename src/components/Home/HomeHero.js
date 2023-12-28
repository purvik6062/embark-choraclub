import Image from "next/image";
import React from "react";
import hero from "@/assets/home/hero-img2.png";
import rocket from "@/assets/home/rocket.png";

function HomeHero() {
  return (
    <div className="flex ps-16 pe-10 py-3 items-center">
      <div>
        <div className="font-quanty text-6xl text-light-navy-blue py-3">
          Discover<span className="font-poppins">.</span> Learn
          <span className="font-poppins">.</span> Engage
        </div>
        <div className="grid grid-cols-2 pb-7 font-poppins">
          A human-centric approach to unlocking Web3 ecosystems!
        </div>
        <div className="font-poppins">
          <button className="flex bg-light-navy-blue rounded-full items-center">
            <div className="text-white py-4 ps-7 pe-4 text-sm">
              Start Your Journey
            </div>
            <div className="border border-white rounded-full p-3 me-2">
              <Image src={rocket} width={10} className="items-center"></Image>
            </div>
          </button>
        </div>
      </div>
      <div>
        <Image src={hero} width={600} unoptimized={true}></Image>
      </div>
    </div>
  );
}

export default HomeHero;
