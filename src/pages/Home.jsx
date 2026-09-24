import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
        { /*
            Theme Toggle
            Button that allows the user to switch between light and dark mode. 
         */} 
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />


        {/* 
            Navbar
            The navigation bar that allows the user to navigate through the different sections of the portfolio.
        */ } 
        <Navbar />

        {/* Main Content*/} 
        <main>
            <HeroSection /> 
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* 
            Footer
            The footer that contains the social media links and the copyright information.
        */} 
    </div>
    );
};
