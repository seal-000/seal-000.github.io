import dndImg from '@/src/assets/dnd-char-creator.gif';
import dogImg from '@/src/assets/dogAPI.png';
import sharImg from '@/src/assets/shar.png';
import aiEmailImg from '@/src/assets/ai-email-assistant.png';
import refinedGitHub from '@/src/assets/refinedGithub.svg';
import travelBookingImg from '@/src/assets/travel-booking.png';
import jobTrackerImg from '@/src/assets/job-tracker.png';
import { ChevronLeft, ChevronRight, Radio } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    const compRef = useRef(null);
    const projectCardRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('All');
    const [pageIndex, setPageIndex] = useState(0);

    const filters = ['All', 'Python', 'JS', 'TS'];
    const cardsPerPage = 4;

    const projects = [
        {
            title: 'DND Character Creator',
            description: 'A full-stack web application for creating and customizing Dungeons & Dragons characters with real-time updates and image upload capabilities.',
            techStack: ['Next.js', 'React', 'JavaScript', 'Firebase', 'CSS'],
            category: 'JS',
            githubUrl: 'https://github.com/seal-000/dnd-game',
            liveUrl: 'https://dnd-game-blush.vercel.app/sign-up',
            imageUrl: dndImg,
        },
        {
            title: 'Dogs Around the World',
            description: 'An interactive web app that fetches dog breeds via the Dog API, allowing users to explore attributes, filter breeds, and set custom exclusion criteria.',
            techStack: ['React', 'JavaScript', 'Axios', 'CSS', 'Dog API'],
            category: 'JS',
            githubUrl: 'https://github.com/seal-000/dogs-around',
            liveUrl: '#',
            imageUrl: dogImg,
        },
        {
            title: 'Sharall, A Multi-List Web App',
            description: 'A responsive task and organization application built with Django, integrating daily to-do, wishlist, and recipe management systems.',
            techStack: ['Django', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'Railway'],
            category: 'Python',
            githubUrl: 'https://github.com/seal-000/mysite-app',
            liveUrl: '#',
            imageUrl: sharImg,
        },
        {
            title: 'AI Email Assistant',
            description: 'An intelligent email management tool featuring AI-powered text rephrasing via Hugging Face and secure Auth0 authentication.',
            techStack: ['Django', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Hugging Face API', 'Auth0'],
            category: 'Python',
            githubUrl: 'https://github.com/seal-000/ai_email_assistant',
            liveUrl: '#',
            imageUrl: aiEmailImg,
        },
        {
            title: 'Travel Booking App',
            description: 'A cloud-native application for searching, comparing, and filtering real-time flight data with automated CI/CD and container deployment.',
            techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Docker', 'AWS', 'GitHub Actions', 'Duffel API'],
            category: 'TS',
            githubUrl: 'https://github.com/seal-000/travel-booking-app',
            liveUrl: '#',
            imageUrl: travelBookingImg,
        },
        {
            title: 'Job Tracker',
            description: 'A server-rendered web application for tracking job applications and interview status, featuring transactional integrity and comprehensive integration testing.',
            techStack: ['Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'EJS', 'Jest', 'Supertest', 'Nodemailer'],
            category: 'JS',
            githubUrl: 'https://github.com/seal-000/job-tracker-app',
            liveUrl: 'https://job-tracker-app-delta-six.vercel.app/',
            imageUrl: jobTrackerImg,
        },
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter);
    const pageCount = Math.ceil(filteredProjects.length / cardsPerPage);
    const shouldCarousel = filteredProjects.length > 0;
    const canNavigate = pageCount > 1;
    const visibleProjects = filteredProjects.slice(
        pageIndex * cardsPerPage,
        (pageIndex + 1) * cardsPerPage
    );

    const changeFilter = (filter) => {
        setActiveFilter(filter);
        setPageIndex(0);
    };

    const showPrevious = () => {
        setPageIndex((currentPage) => (
            currentPage === 0 ? pageCount - 1 : currentPage - 1
        ));
    };

    const showNext = () => {
        setPageIndex((currentPage) => (
            currentPage === pageCount - 1 ? 0 : currentPage + 1
        ));
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(projectCardRef.current.querySelectorAll('.project-card'),
                { opacity: 0, x: 40 },
                { opacity: 1, x: 0, duration: 0.45, ease: 'power3.out', stagger: 0.08 }
            );

            gsap.from('#projects-heading, #projects-controls', {
                scrollTrigger: {
                    trigger: compRef.current,
                    start: 'top 80%',
                    once: true,
                },
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: 'power3.out',
                stagger: 0.12,
            });
        }, compRef);

        return () => ctx.revert();
    }, [activeFilter, pageIndex]);

    return (
        <section id="projects" ref={compRef} className="flex items-center justify-center px-6 py-20">
            <div className="mx-auto w-full max-w-5xl">

                <div id="projects-heading" className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div className="max-w-xl">
                        <span className="text-xs uppercase tracking-[0.4em] mb-4 block underline underline-offset-8">Selected Works</span>
                        <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter uppercase leading-[0.85]">
                            Featured <br /><span className="italic">Projects</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed uppercase tracking-wider">
                        A small selection of my favorite projects from the past few years, showcasing my technical skills.
                    </p>
                </div>

                <div id="projects-controls" className="mb-8 flex flex-wrap items-center justify-between gap-5 border-y border-current/10 py-4">
                    <div className="flex gap-5" role="group" aria-label="Filter projects">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => changeFilter(filter)}
                                className={`text-xs font-bold uppercase tracking-[0.25em] transition-opacity ${activeFilter === filter ? 'opacity-100 underline underline-offset-8' : 'opacity-40 hover:opacity-100'}`}
                                aria-pressed={activeFilter === filter}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="flex items-center gap-3 md:gap-5">
                    {shouldCarousel && (
                        <button
                            type="button"
                            onClick={showPrevious}
                            disabled={!canNavigate}
                            className="shrink-0 border border-red-500/60 p-2 text-red-500 transition-colors hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-red-500"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={18} />
                        </button>
                    )}

                    <div
                        ref={projectCardRef}
                        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"
                    >
                        {visibleProjects.map((project) => (
                            <div
                                key={project.title}
                                className="project-card group flex h-full flex-col rounded-3xl border border-current/10 bg-current/[0.02] p-5 backdrop-blur-sm transition-colors hover:border-current/30 [.theme-light_&]:bg-[#fbf9f1] md:p-6"
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
                                <p className="text-sm opacity-70 mb-8">{project.description}</p>

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

                    {shouldCarousel && (
                        <button
                            type="button"
                            onClick={showNext}
                            disabled={!canNavigate}
                            className="shrink-0 border border-red-500/60 p-2 text-red-500 transition-colors hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-red-500"
                            aria-label="Next project"
                        >
                            <ChevronRight size={18} />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}