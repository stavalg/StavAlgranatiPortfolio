import { Mail, Phone } from "lucide-react";

export const ContactSection = () => {
    return (
    <section
    id="contact"
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I am currently seeking new opportunities in software engineering. If you're looking for a driven, adaptable developer to join your team, I'd love to hear from you. Feel free to reach out via email or connect with me on LinkedIn.
            </p>

            <div className="flex justify-center">
                <div className="w-full max-w-3xl space-y-8 text-center">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>

                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a 
                                href="mailto:stava70510@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    stava70510@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>

                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a 
                                href="tel:052-9550886"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    052-9550886
                                </a>
                            </div> 
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                                <svg
                                    aria-hidden="true"
                                    className="h-6 w-6 text-primary"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
                                </svg>
                            </div>

                            <div>
                                <h4 className="font-medium">LinkedIn</h4>
                                <a 
                                href="https://linkedin.com/in/stav-algranati"
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    https://linkedin.com/in/stav-algranati
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* THIS IS A PLACEHOLDER FOR A FUTURE CONTACT FORM, WHICH IS CURRENTLY COMMENTED OUT.
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6"></form>
                </div>
                */}
            </div>
        </div>
    </section>);
};