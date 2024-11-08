import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPalette, faCogs } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: "Web & Mobile App",
    description: "Turning concepts into outstanding web and mobile app solutions",
    color: "#9D8189",
    icon: faLaptopCode
  },
  {
    title: "Design & Creative",
    description: "Creating visually captivating designs that resonate with your audience",
    color: "#9D8189",
    icon: faPalette
  },
  {
    title: "Development",
    description: "Realizing your vision through cutting-edge technology and contemporary design trend",
    color: "#9D8189",
    icon: faCogs
  }
];

const SkillCard = () => {
  return (
    <main className="flex flex-row flex-wrap w-11/12 gap-4">
      {services.map((service, index) => (
        <div key={index} className="flex-grow w-64 ">
          <div className="h-full pt-12 pb-10 pl-6 pr-10 border rounded-md bg-white transition-transform duration-300 transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={service.icon} size="2x" style={{ color: service.color }} />
            </div>
            <h1 className="text-lg font-semibold" style={{ color: service.color }}>
              {service.title}
            </h1>
            <p className="text-base">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default SkillCard;
