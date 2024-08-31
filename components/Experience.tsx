import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

export const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 font-sans w-full">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="w-full mt-12 ml-80 grid lg:grid-cols-3 grid-cols-1 gap-10 justify-center">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 15000) + 10000} // Increase the random duration for smoother animation
            borderRadius="2rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(2rem * 0.96)`,
              padding: "15px",
              width: "100%",
              maxwidth:"800px"
               // Increase padding for larger size
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-5 py-8 md:p-8 lg:p-12 gap-4">
              {/* <img
                // src={card.thumbnail}
                // alt={card.title}
                className="lg:w-40 md:w-28 w-20" // Increase image size
              /> */}
              <div className="lg:ms-5">
                <h1 className="text-start text-2xl md:text-3xl font-bold">
                  {card.title}
                </h1>
                <ul className="text-start text-white-100 mt-4 font-semibold text-lg list-disc pl-5">
                  {card.desc.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
