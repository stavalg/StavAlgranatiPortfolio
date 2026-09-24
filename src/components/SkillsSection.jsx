import { useState, filter } from "react";
import { cn } from "@/lib/utils";


const skills = [
// Frontend Skills
{
    name: "JavaScript",
    level: 90,
    category: "Frontend"
}, {
    name: "React",
    level: 85,
    category: "Frontend"
}, {
    name: "Node.js",
    level: 80,
    category: "Frontend"
},

// Backend Skills
{
    name: "Python",
    level: 75,
    category: "Backend"
}, {
    name: "C",
    level: 70,
    category: "Backend"
}, {
    name: "java",
    level: 70,
    category: "Backend"
},

// Database
{
    name: "SQL",
    level: 80,
    category: "Database"
}, {
    name: "MySQL",
    level: 75,
    category: "Database"
}, {
    name: "PostgreSQL",
    level: 75,
    category: "Database"
},

// Tools and Technologies
{
    name: "Git",
    level: 80,
    category: "Tools and Technologies"
}, {
    name: "GitHub Copilot",
    level: 75,
    category: "Tools and Technologies"
}, { 
    name: "Gemini CLI",
    level: 75,
    category: "Tools and Technologies"
}, {
    name: "Clode Code",
    level: 75,
    category: "Tools and Technologies"
}, {   
    name: "VS Code",
    level: 65,
    category: "Tools and Technologies"
}
];

const categories = ["all", "Frontend", "Backend","Database", "Tools and Technologies"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-automax-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div>
                                <h3> {skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};