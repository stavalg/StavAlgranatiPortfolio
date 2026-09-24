import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-24 relative">
        <div className="conrainer mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Developer & Tech Creator</h3>

                    <p className="text-muted-foreground">
                        Junior Developer with one year of experience in web development and software engineering. 
                        Skilled in front-end and back-end technologies, with a strong foundation in programming languages such as JavaScript, Python, and Java.  
                    </p>

                    <p className="text-muted-foreground">
                        I am a passionate developer and tech creator with a strong interest in web development,
                        software engineering, and emerging technologies. I enjoy building innovative solutions and exploring new ideas in the tech world.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> 
                            Get In Touch
                        </a>

                        <a
                            href="/CV/StavAlgranatiCV.pdf"
                            download="StavAlgranatiCV.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Professional Profile</h4>
                                <p className="text-muted-foreground">Curious and proactive developer with a keen aesthetic taste and strong communication skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User />
                            </div>
                            <div className="text-left">
                                <h5 className="font-semibold text-lg">Education</h5>
                                <p className="text-muted-foreground">Pursuing a B.Sc. in Computer Science at The Open University of Israel</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase />
                            </div>
                            <div className="text-left">
                                <h6 className="font-semibold text-lg">Work Experience</h6>
                                <p className="text-muted-foreground">Developing and shipping end-to-end features for cloud-based, ML-powered production applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};