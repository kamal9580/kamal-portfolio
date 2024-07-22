import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "nileshkumarkamal@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };



  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-purple">Connect!</span> 
         
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        I'm currently looking for internship opportunities to enhance and explore my technical knowledge, I am eager to connect with professionals in the tech industry to explore potential opportunities, gain insights, and learn from experienced individuals like yourself. where I can contribute my skills and grow further.

I would love to connect with you and discuss any potential openings or advice you might have for someone with my background. Thank you for your time, and I look forward to the possibility of connecting.
        </p>
        <a href="nileshkumarkamal@gmail.com">
          <MagicButton
            title="Lets connect through mail(copy mail)"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        
          <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              // icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}


            // title="Let's get connect on LinkedIn"
            icon={<FaLocationArrow />}
            // position="right"
          />
        
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
         
        </p>

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
               <a href= {info.link}>
               <img src={info.img} alt="icons" width={20} height={20} />
                 </a>
             
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
