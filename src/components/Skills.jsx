import React from "react";
import skills from "../data/skills";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto px-4 py-20 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-red-600 ">Skills</p>
          <p className="py-4">These are the technologies I worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-[115%] duration-500"
            >
              <img src={skill.logo} alt="HTML" className="w-20 mx-auto pt-2" />
              <p className="my-4 font-bold">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
