
export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">

            {/* Content */}
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="mb-6">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
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
                    className="btn btn-primary px-8 py-4 rounded-full text-sm font-medium transition-all hover:scale-105"
                >
                    View Projects
                </a>

                <div className="animate-bounce opacity-20 mx-4">
                    <div className="w-[1px] h-12 bg-current" />
                </div>

                <a
                    href="#contact"
                    className="btn btn-secondary border border-border-dark px-8 py-4 rounded-full text-sm font-medium transition-all"
                >
                    Get In Touch
                </a>
            </div>
            
        </section>
    );
}