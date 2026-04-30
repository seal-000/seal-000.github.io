import React from "react";

export default function Experience() {
    const experiences = [
        {
            company: "Nunsys",
            role: "Microsoft Dynamics Developer",
            date: "March 2025 - Present",
            description: [
                "Developed 34 Power Automate flows and a Power Apps application for an enterprise manufacturing client, automating manual business workflows and reducing operational overhead across key business processes",
                "Built and integrated 4 React components into Power Apps using the PCF framework, enhancing UI interactivity for a factory floor business application",
                'Implemented integrations between Dynamics 365 Business Central and Microsoft 365 services to extend application functionality for client-specific business operations',
                'Managed and completed 20+ development work items across sprint cycles in Azure DevOps, consistently delivering tasks on time within an 11-person cross-functional team'
            ]

        },
        {
            company: "DNR Studios",
            role: "Software Engineer Intern",
            date: "July 2024 - August 2024",
            description: [
                'Built a fully functional web-based solitaire game from scratch using JavaScript, HTML, and CSS, implementing interactive drag-and-drop card mechanics',
                'Redesigned a podcast application UI in Figma and developed cross-platform mobile builds for iOS and Android using Xamarin',
                'Collaborated with a 5-person team to improve mobile and web application responsiveness and UX across multiple features'
            ]

        }
    ];

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/3">
                        <h2 className="text-5xl md:text-8xl  font-medium sticky top-32 tracking-tighter uppercase leading-[0.85]">
                            Career <br /><span className="italic">History</span>
                        </h2>
                    </div>

                    <div className="md:w-2/3 space-y-24">
                        {experiences.map((exp, idx) => (
                            <div key={exp.company} className="experience-row group relative border-b pb-20">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                                    <div>
                                        <h3 className="text-3xl font-semibold transition-all tracking-tighter">
                                            {exp.role}
                                        </h3>
                                        <p className="text-xs uppercase tracking-[0.2em] font-bold mt-2">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono uppercase tracking-widest">
                                        {exp.date}
                                    </span>
                                </div>

                                <ul className="space-y-4 max-w-2xl">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start space-x-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-current mt-2 opacity-30 shrink-0" />
                                            <p className="text-lg font-light leading-relaxed">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}