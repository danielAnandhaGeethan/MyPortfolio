import React, { useState } from "react";
import works from "../data/works";

const Work = () => {
  const [hover, setHover] = useState(-1);

  return (
    <div name="work" className="w-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-4 py-20 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl border-b-4 text-gray-300 border-red-600 font-bold inline">
            Work
          </p>
          <p className="py-6">Check out some of my works</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {works.map((work) => (
            <div
              className="shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div"
              onMouseEnter={() => setHover(work.id)}
              onMouseLeave={() => setHover(-1)}
              style={{
                backgroundImage: `url(${work.image})`,
              }}
            >
              <div
                className={
                  !hover
                    ? "opacity-0"
                    : work.id === hover
                    ? "opacity-100 duration-300"
                    : "opacity-0"
                }
              >
                <p className="text-2xl font-bold text-white tracking-wider px-3 text-center">
                  {work.title}
                </p>
                <div className="pt-8 text-center">
                  <a href={work.link} rel="noreferrer" target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      CODE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
