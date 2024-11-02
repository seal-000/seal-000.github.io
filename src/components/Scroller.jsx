import React from 'react';

const images = [
  './logos/git.svg',
  './logos/html.svg',
  './logos/css3.svg',
  './logos/react.svg',
  './logos/js.svg',
  './logos/typescript.svg',
  './logos/aws.svg',
  './logos/python.svg',
  './logos/django.svg',
  './logos/java.svg',
  './logos/postgresql.svg',
  './logos/nextJs.svg',
  './logos/nodeJs.svg',
  './logos/mongo.svg',
  './logos/tailwind.svg',
];


const Scroller = () => {
  return (
    <div className="flex overflow-hidden space-x-16 pt-16 group pb-10">
    <div className="flex space-x-16 animate-loopScroll group-hover:paused">
      {images.map((src, index) => (
        <img 
          key={index} 
          loading="lazy" 
          src={src} 
          className="max-w-none" 
          alt={`Image ${index + 1}`} 
        />
      ))}
    </div>
    <div className="flex space-x-16 animate-loopScroll group-hover:paused" aria-hidden="true">
      {images.map((src, index) => (
        <img 
          key={index} 
          loading="lazy" 
          src={src} 
          className="max-w-none" 
          alt={`Image ${index + 1}`} 
        />
      ))}
    </div>
  </div>
  );
};

export default Scroller;