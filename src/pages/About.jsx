import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row bg-gray-800 p-8">
    <div className="rounded-full border-8 border-blue-500 shadow-xl">
      <img src="https://via.placeholder.com/150" className="h-48 rounded-full sm:h-56" alt="author" />
    </div>
    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
      <h1 className="text-center font-bold text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
        Hello, I'm Christy Smith!
      </h1>
      <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
        <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
          <p className="font-medium text-lg uppercase text-white">Let's connect</p>
          <div className="hidden sm:block">
            <i className="bx bx-chevron-right text-3xl text-yellow-400"></i>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0 bg-lime-300">
          <a href="/" className="text-white hover:text-yellow-400">
            <i className="bx bxl-facebook-square text-2xl"></i>
          </a>
          <a href="/" className="pl-4 text-white hover:text-yellow-400">
            <i className="bx bxl-twitter text-2xl"></i>
          </a>
          <a href="/" className="pl-4 text-white hover:text-yellow-400">
            <i className="bx bxl-dribbble text-2xl"></i>
          </a>
          <a href="/" className="pl-4 text-white hover:text-yellow-400">
            <i className="bx bxl-linkedin text-2xl"></i>
          </a>
         
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default About;
