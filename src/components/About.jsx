import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a web developer with a passion for programming, data structures, and algorithms. 
        I recently completed a two-month internship at LetsGrowMore, where I contributed to remote 
        ReactJS-based front-end projects. I enhanced user interface functionality and design using 
        my proficiency in HTML, JavaScript, and CSS. I also developed valuable teamwork, remote collaboration,
        and time management skills.

        </p>

        <br />

        <p className="text-xl">
          Currently, I am pursuing a Master of Computer Applications (MCA) degree from Vellore Institute of Technology (VIT), with a focus on computer software engineering. 
          I have completed a Bachelor of Computer Applications (BCA) degree from IPS Academy with a major in computer science. I have also earned multiple certifications from 
          LinkedIn and AWS in Java, data structures, and AWS technical essentials. I aspire to be a good developer and learn new things every day. I am an extrovert who likes 
          to meet new people and understand how they think.
        </p>
      </div>
    </div>
  );
};

export default About;