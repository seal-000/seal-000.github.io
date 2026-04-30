//import profileImg from '../assets/Profile.png';
import profileImg from '@/src/assets/Profile.png';
import { Hammer, Layout, Database } from 'lucide-react';

const skills = [
  {
    name: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["React.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["Python", "Django", "Node.js", "Express", "SQL"],
  },
  { 
    name: "Tools",
    icon: <Hammer className="w-6 h-6" />,
    items: ["Git", "Docker", "Azure DevOps","VS Code", "Figma"] 
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 gap-20">

      {/* Header Text Outside Map */}
      <div className="w-full max-w-6xl flex items-center gap-3 mb-6 py-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-sm uppercase tracking-[0.2em] font-bold opacity-80">
          Currently located at New York City
        </span>
      </div>


      {/* Top Section: About Me */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center gap-10">
        {/* Left container: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full max-w-[400px] aspect-square object-cover rounded-full border-3 border-[#0e100f]"
          />
        </div>

        {/* Right container: About me text */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-5xl md:text-6xl font-display font-medium tracking-tighter uppercase leading-[0.85]">About Me</h2>
          <p className="text-lg opacity-80">
           Graduated with a B.A. in Computer Science from CUNY Queens College.
           I enjoy learning UX/UI design in my free time. 
           Currently working at NUNSYS as a Software Engineer focused on Power Platform and Dynamics 365,
           building and customizing business applications.
          </p>
        </div>
      </div>

      {/* Bottom Section: Skills Grid */}
      <div id="skills-grid" className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card p-8 rounded-3xl border backdrop-blur-sm hover:border-current/30 "
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-current/5">
                {skill.icon}
              </div>
              <h3 className="font-display font-semibold uppercase text-sm">
                {skill.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-mono border rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
