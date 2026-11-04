import { ExternalLink, ArrowRight, Terminal } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
);

const projects = [
    {
        id: 1,
        title: "Gmail Email Security Check",
        description:
            "A Gmail add-on that scores emails 0–100 for phishing risk and explains why, using rule checks, VirusTotal and Gemini AI.",
        image: "/projects/email-scorer.png",
        tags: ["Python", "FastAPI", "Apps Script", "Cloud Run", "Gemini"],
        githubUrl: "https://github.com/stavalg/gmail-email-scorer",
    },
    {
        id: 2,
        title: "Lab C Assembler",
        description:
            "A two-pass assembler written in ANSI C. It expands macros, validates labels and operands, resolves symbols across passes and generates machine-code output files, processing multiple source files in one run.",
        terminal: ["$ make", "$ ./assembler --print-symbols program.as", "; program.as", "START:  mov  r1, VALUE", "VALUE:  .data 42", "→ program.am  program.ob  program.ent  program.ext"],
        tags: ["C", "ANSI C", "Make", "Compilers"],
        githubUrl: "https://github.com/stavalg/Lab-C-Assembler",
    },
    {
        id: 3,
        title: "Nail Artist Landing Page",
        description:
            "A responsive Hebrew (RTL) website for a nail artist, with a treatments menu, photo gallery and one-tap WhatsApp booking.",
        image: "/projects/nail-artist.png",
        tags: ["HTML", "CSS", "JavaScript", "RTL"],
        demoUrl: "https://shaked-algranati-nail-artist.netlify.app/",
    },
];

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully 
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                    key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                            ) : (
                                <div className="w-full h-full bg-zinc-900 text-green-400 font-mono text-xs p-4 text-left">
                                    <div className="flex items-center gap-2 text-zinc-400 mb-3">
                                        <Terminal size={14} /> {project.title}
                                    </div>
                                    {project.terminal?.map((line) => (
                                        <div key={line} className={line.startsWith("$") ? "text-zinc-100" : ""}>
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {project.demoUrl && (
                                        <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} live demo`}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} on GitHub`}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <GithubIcon size={20}/>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/stavalg"
                >
                    Check My GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>;
};