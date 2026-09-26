import { createElement, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    IconBrandGithubFilled,
    IconBrandLinkedinFilled,
} from '@tabler/icons-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
    {
        label: 'GitHub',
        handle: '@seal-000',
        href: 'https://github.com/seal-000',
        icon: IconBrandGithubFilled,
    },
    {
        label: 'LinkedIn',
        handle: 'in/miranda-casan',
        href: 'https://www.linkedin.com/in/mirandacasan/',
        icon: IconBrandLinkedinFilled,
    },
];

export default function Socials() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.socials-heading, .social-link', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 82%',
                    once: true,
                },
                y: 36,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.12,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="socials"
            ref={sectionRef}
            className="px-6 pb-24 pt-4"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 border-t border-current/10 pt-10 md:flex-row md:items-end md:justify-between">
                <div className="socials-heading">
                    <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
                        Find me online
                    </span>
                    <h2 className="font-display text-4xl font-medium uppercase leading-none tracking-tighter md:text-6xl">
                        Stay <span className="italic">connected</span>
                    </h2>
                </div>

                <div className="grid w-full max-w-xl grid-cols-1 gap-8 sm:grid-cols-2">
                    {socialLinks.map(({ label, handle, href, icon: Icon }) => (
                        <a
                            key={label}
                            className="social-link group flex items-center justify-between border-b border-current/20 py-5 transition-colors hover:border-current"
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visit Miranda's ${label} profile`}
                        >
                            <span>
                                <span className="block text-xs font-bold uppercase tracking-[0.25em]">
                                    {label}
                                </span>
                                <span className="mt-2 block text-sm opacity-60 transition-opacity group-hover:opacity-100">
                                    {handle}
                                </span>
                            </span>
                            {createElement(Icon, {
                                size: 28,
                                stroke: 1.5,
                                className: 'transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1',
                                'aria-hidden': true,
                            })}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
