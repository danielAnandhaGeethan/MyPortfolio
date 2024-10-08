import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-[100%] px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Daniel. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a software developer working in Zoho. I completed my B.Tech undergratuate studies in Computer
              Science with Artificial Inteligence and Machine Learning. I am a
              very determined person who has the Ideology of giving the best in
              everything I do. I like to learn and explore new things. I have
              the willingness to acquire knowledge in new technologies from time
              to time. I value the importance of teamwork and have a strong
              ability to communicate effectively with team members and
              facilitate group decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
