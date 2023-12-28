import React from "react";
import illustration from "@/assets/home/illustration.png";
import Image from "next/image";
import connect from "@/assets/home/connect.png";
import future from "@/assets/home/future.png";

function HowItWorks() {
  const container = [
    {
      image: connect,
      title: "Eager to Connect in Web3?",
      text: "Chora Club is your gateway to tailored learning, community engagement, and endless opportunities",
      buttonText: "Start Your Journey",
    },

    {
      image: future,
      title: "Ready to Shape the Future of Web3?",
      text: "Your expertise matters in guiding the next wave of web3 enthusiasts",
      buttonText: "Join as a Delegate",
    },
  ];

  return (
    <div>
      <div className="px-14 py-6 relative">
        <div className="">
          <div className="text-4xl py-14 font-quanty">How Chora Club Works</div>
          <div className="absolute right-0 top-0">
            <Image src={illustration} width={400}></Image>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 pe-16 font-poppins">
          {/* {workingDetails.map((data) => ( */}
          <div
            style={{ boxShadow: "0px 0px 23.8px 0px rgba(0, 0, 0, 0.11);" }}
            className={`bg-home-working-texture border border-light-navy-blue p-10 rounded-3xl`}
          >
            <div className="text-light-navy-blue font-bold text-xl h-16">
              Discover DAOs
            </div>
            <div className="pt-2 text-sm">
              Dive into the vast universe of Web3 ecosystems! Explore and
              uncover the hidden treasures of diverse DAOs. It's not just
              discovery; it's a journey into the heart of decentralized
              possibilities.
            </div>
          </div>
          {/* ))} */}

          <div
            style={{ boxShadow: "0px 0px 23.8px 0px rgba(0, 0, 0, 0.11);" }}
            className={`bg-home-working-texture2 border border-light-navy-blue p-10 rounded-3xl`}
          >
            <div className="text-light-navy-blue font-bold text-xl h-16">
              Fast-track Learning with Delegate Dialogues
            </div>
            <div className="pt-2 text-sm">
              Skip the learning curve! Book lively sessions with our seasoned
              Delegates. Get ready for a knowledge boost tailored to your
              interests. Because why settle for ordinary when you can learn from
              the extraordinary
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 0px 23.8px 0px rgba(0, 0, 0, 0.11);" }}
            className={`bg-home-working-texture3 border border-light-navy-blue p-10 rounded-3xl`}
          >
            <div className="text-light-navy-blue font-bold text-xl h-16">
              Become an Active Participant
            </div>
            <div className="pt-2 text-sm">
              Be more than a spectator—be an active player! Attend Delegate
              Office Hours regularly. It's not just about showing up; it's about
              actively participating, asking questions, engaging with industry
              leaders and becoming an integral part of the ecosystem.
            </div>
          </div>
        </div>
      </div>

      {/* Container for platform features */}

      <div className="px-16 py-10">
        <div className="grid grid-cols-2 gap-8 font-poppins">
          {/* Containers mapping*/}

          {container.map((data) => (
            <div className="">
              <div className="h-72">
                <div className="flex justify-center">
                  <Image
                    src={data.image}
                    width={400}
                    unoptimized={true}
                  ></Image>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-light-navy-blue py-3">
                  {data.title}
                </div>
                <div className="text-sm pb-5 w-5/6 mx-auto">{data.text}</div>
                <div>
                  <button className="p-4 border-black border-2 text-sm font-semibold rounded-full hover:bg-black hover:text-white">
                    {data.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;