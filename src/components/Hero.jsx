import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Hero() {

    const compRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline(); 
            tl.from("#hero h1", {
                x: -50,
                opacity: 0, 
                duration: 1,
                ease: "power3.out",
                stagger: 0.1
            })
            .from("#tagline", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"}, "-=0.5")
        }, compRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" ref={compRef} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">

            {/* Content */}
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="mb-6">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 uppercase leading-[0.85]">
                        Hi, I'm Miranda
                    </h1>
                    <p id="tagline" className="max-w-xl mx-auto mb-12 text-lg md:text-xl font-sans opacity-80">
                       Full-stack engineer focused on building scalable, user-centered web apps and modern backend systems.
                    </p>
                </div>

            </div>

            <div id="cta-btns" className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center gap-8 w-full max-w-2xl">
                <a
                    href="#projects"
                    className="px-8 py-4 rounded-full text-sm font-medium transition-all hover:scale-105"
                >
                    View Projects
                </a>

                <div className="animate-bounce opacity-20 mx-4">
                    <div className="w-[1px] h-12 bg-current" />
                </div>

                <a
                    href="#contact"
                    className="border px-8 py-4 rounded-full text-sm font-medium transition-all hover:bg-[var(--theme-dark-text,var(--theme-light-text))] hover:text-[var(--theme-dark-background,var(--theme-light-background))] hover:border-[var(--theme-dark-text,var(--theme-light-text))]"
                >
                    Get In Touch
                </a>
            </div>
            
        </section>
    );
}