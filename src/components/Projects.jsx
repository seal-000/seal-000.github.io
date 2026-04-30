import dndImg from '@/src/assets/dnd-char-creator.gif';
import dogImg from '@/src/assets/dogAPI.png';
import sharImg from '@/src/assets/shar.png';
import refinedGitHub from '@/src/assets/refinedGithub.svg';
import { Radio } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    const compRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => { 
            gsap.from("#projects-grid .project-card", {
                scrollTrigger: {
                    trigger: "#projects-grid",
                    start: "top 80%",   
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2    
            })
        }, compRef);

        return () => ctx.revert();
    }, []);
            


    const projects = [
        {
            title: 'DND Character Creator',
            description: 'A web application that allows users to create, manage, and customize their own Dungeons & Dragons characters, with real-time profile updates and image uploads.',
            techStack: ['Next.js', 'Firebase', 'CSS'],
            githubUrl: 'https://github.com/seal-000/dnd-game',
            liveUrl: 'https://dnd-game-blush.vercel.app/sign-up',
            imageUrl: dndImg,
        },
        {
            title: "Dogs Around the World",
            description: "An interactive web app that fetches dog breeds using the Dog API. Discover new dogs, view attributes, and click specific traits to ban them from future results.",
            techStack: ['React', 'CSS', 'Axios', 'Dog API'],
            githubUrl: 'https://github.com/seal-000/dogs-around',
            liveUrl: '#',
            imageUrl: dogImg,
        },
        {
            title: "Sharall, A Multi-List Web App",
            description: "A responsive web application built with Django that helps users organize their daily life through integrated to-do, wish, and cooking lists.",
            techStack: ['Django ', 'PostgreSQL'],
            githubUrl: 'https://github.com/seal-000/mysite-app',
            liveUrl: '#',
            imageUrl: sharImg,
        },
    ];

    return (
        <section id="projects" ref={compRef} className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-xs uppercase tracking-[0.4em] mb-4 block underline underline-offset-8">Selected Works</span>
                        <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.85]">
                            Featured <br /><span className="italic">Projects</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm  leading-relaxed uppercase tracking-wider">
                        A small selection of my favorite projects from the past few years, showcasing my technical skills.
                    </p>
                </div>

                <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="project-card p-6 rounded-3xl border border-current/10 bg-current/[0.02] [.theme-light_&]:bg-[#fffbea] backdrop-blur-sm hover:border-current/30 transition-colors flex flex-col group"
                        >
                            {/* Image Container with hover zoom effect */}
                            <div className="overflow-hidden rounded-2xl mb-6">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full aspect-video object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                            </div>
                            
                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-[10px] font-mono uppercase  border  rounded-full ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Title & Description */}
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-sm opacity-70 mb-8 flex-grow">{project.description}</p>
                            
                            {/* Links */}
                            <div className="flex gap-6 mt-auto">
                                <a href={project.githubUrl} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity border-b border-transparent hover:border-current pb-1 group/link">
                                    <span 
                                        className="w-3.5 h-3.5 bg-current inline-block" 
                                        style={{ 
                                            WebkitMaskImage: `url("${refinedGitHub}")`,
                                            WebkitMaskSize: 'contain',
                                            WebkitMaskRepeat: 'no-repeat',
                                            WebkitMaskPosition: 'center',
                                            maskImage: `url("${refinedGitHub}")`,
                                            maskSize: 'contain',
                                            maskRepeat: 'no-repeat',
                                            maskPosition: 'center'
                                        }} 
                                    />
                                    Source
                                </a>
                                {project.liveUrl !== '#' && (
                                    <a href={project.liveUrl} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity border-b border-transparent hover:border-current pb-1">
                                        <Radio size={18} />
                                        Demo 
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}