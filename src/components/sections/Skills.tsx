import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const skills = [
    {
        category: "Programming",
        items: ["Python", "SQL", "JavaScript (basic)"],
    },
    {
        category: "Backend Development",
        items: ["RESTful API design", "Authentication fundamentals", "Modular backend architecture"],
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "Data modeling", "Indexing & query optimization"],
    },
    {
        category: "DevOps & Infrastructure",
        items: ["Docker", "CI/CD fundamentals", "AWS / GCP basics"],
    },
    {
        category: "Tools",
        items: ["Git, GitHub", "Postman", "Linux", "Agile & SDLC fundamentals"],
    },
];

export function Skills() {
    return (
        <Section id="skills">
            <Reveal className="mb-12">
                <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                    <Reveal key={skillGroup.category} delay={index * 0.1} className="h-full">
                        <SpotlightCard className="h-full p-6 rounded-lg hover:border-accent/50 transition-colors duration-300">
                            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 group-hover:text-white transition-colors">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="text-gray-400 text-sm font-mono group-hover:text-gray-200 transition-colors">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
