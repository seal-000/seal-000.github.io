import React from 'react';
import { Link } from 'react-router-dom';


const projects = [
  {
    title: 'DND Character Creator',
    description: 'Next.js, Firebase',
    link: 'https://dnd-game-blush.vercel.app/sign-up',
    imgSrc: '/projectIcons/dnd.gif',
  },
  {
    title: 'Dogs Around the World',
    description: 'React, Dog API',
    link: 'https://main.dhud9t5nprcb1.amplifyapp.com/',
    imgSrc: '/projectIcons/dogAPI.png',
  },
  {
    title: 'Sharall, A Multi-List Web App',
    description: 'Django, Python, PostgreSQL',
    link: 'https://web-production-6a7d.up.railway.app/',
    imgSrc: '/projectIcons/shar.png',
  },
  
];

const ProjectCard = ({ project }) => (
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-grow">
    <div className="flex flex-col items-center">
      <img alt={project.title} className="object-cover w-full max-h-96 rounded-lg transition-transform duration-300 hover:scale-105" src={project.imgSrc} />
      <div className="my-3">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <h1 className="text-xl font-light">{project.description}</h1>
      </div>
     
    </div>
  </a>
);

const ShortProjects = () => (
  <div className="flex flex-col items-center w-screen max-w-10xl px-4 pb-20 sm:px-8 md:px-10">
  <main className="grid gap-4 mt-10 md:grid-cols-2">
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </main>

  <Link to="/projects" className="relative flex items-center justify-center h-12 w-40 mt-5 py-2 px-4 text-xl border rounded-full overflow-hidden shadow group">
    <div className="absolute inset-x-0 bottom-0 h-0 bg-customGreen transition-all duration-250 ease-out group-hover:h-full"></div>
    <span className="relative font-medium">Load More</span>
  </Link>

</div>

);

export default ShortProjects;
