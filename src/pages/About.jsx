import React from "react";
import FadeIn from "../components/FadeIn";

const About = () => {
  return (
<div className="p-8 pb-24">
  <FadeIn>
  <div className="flex flex-col items-center justify-center lg:flex-row p-8 rounded-lg pb-32">
   
    <div className="rounded-full flex-shrink-0 w-80 h-80">
      <img src="/profile/Avatar.svg"  loading="eager" className="h-full w-full rounded-full sm:h-80" alt="author" />
    </div>

    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
      <h1 className="text-center font-bold text-4xl text-black sm:text-left sm:text-5xl md:text-6xl hover:text-customPeach">
        Hello, I'm Miranda C.   
      </h1>
      <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start ">
        <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
          <p className="font-medium text-lg  text-dark">
            Recent graduate from CUNY Queens College with a BA in Computer Science and a minor in Graphic Design, 
            I am passionate about combining technology and design to create impactful digital experiences.
          </p>
        </div>
      </div>
    </div>

  </div>
  </FadeIn>

  <hr></hr>

  <div className="flex text-4xl font-semibold text-center mb-8 mt-12 justify-center hover:text-customGreen">What I can do for you</div> 

  <div className="flex justify-center py-10">
    <main className="flex w-11/12 flex-row flex-wrap gap-4">

      {/* Design Section */}
      <div className="w-64 flex-grow bg-white p-6 shadow-md rounded-2xl transform transition-transform duration-300 hover:rotate-1" >
        <div className="h-full px-2 pb-10">
          <div className="relative flex flex-col gap-2">
            <h1 className="text-md border-b border-gray-300 py-5 text-gray-500">01</h1>
            <h1 className="py-8 text-xl font-normal text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">Design</h1>
            <p className="text-base text-gray-700">
              With a foundation in Graphic Design, I bring a keen eye for aesthetics and usability to every project. 
              My focus on intuitive UI/UX design ensures that each application is not only visually appealing but also crafted to deliver seamless, 
              user-centered experiences that enhance engagement
            </p>
          </div>
        </div>
      </div>

      {/* Development Section */}
      <div className="w-64 flex-grow bg-white p-6 shadow-md rounded-2xl transform transition-transform duration-300 hover:-rotate-1" >
        <div className="h-full px-2 pb-10">
          <div className="relative flex flex-col gap-2">
            <h1 className="text-md border-b border-gray-300 py-5 text-gray-500">02</h1>
            <h1 className="py-8 text-xl font-normal text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">Development</h1>
            <p className="text-base text-gray-700">
              As a Computer Science graduate, I specialize in full-stack development, leveraging a range of technologies to build scalable and efficient applications.
              From front-end frameworks to back-end logic, my coding expertise enables me to tackle complex challenges and deliver robust,
              high-performing solutions
            </p>
          </div>
        </div>
      </div>

      {/* Full Package Section */}
      <div className="w-64 flex-grow bg-white p-6 shadow-md rounded-2xl transform transition-transform duration-300 hover:rotate-1">
        <div className="h-full px-2 pb-10">
          <div className="relative flex flex-col gap-2">
            <h1 className="text-md border-b border-gray-300 py-5 text-gray-500">03</h1>
            <h1 className="py-8 text-xl font-normal text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">The full package</h1>
            <p className="text-base text-gray-700">
              I combine the creative and technical, making me a versatile developer with a passion for building cohesive, 
              impactful digital products. My goal is to bridge the gap between design and functionality to create applications 
              that are as effective as they are engaging. 
              Ready to bring the full package to any project!
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>

  <hr></hr>




</div>


  
  );
};

export default About;
