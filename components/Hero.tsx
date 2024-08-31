import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />    
        {/* ye accertinity se aa rha hai jo madd krta hai copy code paste karo desigining karne me */}
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-96 ">
          I’m a web developer skilled in both front-end and back-end development, with a strong foundation in competitive programming. I excel in React and its ecosystem, crafting web applications that focus on enhancing user experience.
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Website without visitors is like a ship lost in the horizon."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          I am Nilesh Kumar kamal, currently in the 4th year of my Bachelor's degree in Computer Science and Engineering at IIIT Ranchi.


    I'm proficient in MERN stack development and also well-versed in developing RESTful APIs using Node.js. I also have a good knowledge of Next js, Redux, Recoil ,Postgres, prisma, SQL etc.


          </p>

          <p className="text-center text-sm md:text-lg lg:text-2xl">

         

I am actively engaged in problem solving skills and coding challenges on platforms like LeetCode,Codechef,GFG,Codeforces and have the passion for Open Source Contribution and continuous learning. 


            </p>

            <br></br>

          <p className="text-center text-sm md:text-lg lg:text-2xl">
          I also have a prior experience as a Full stack developer intern at Nexorand  where I am building the Frontend and backend  using React js , Tailwind css, NodeJS as a framework ,express js, Mongodb as a databases.
          <span className="text-blue-600 font-sans font-extrabold"> Full Stack Intern at Nexorand.</span>
            </p>

          <a href="https://www.nexorand.com/">
            <MagicButton
              title="Live Site"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
