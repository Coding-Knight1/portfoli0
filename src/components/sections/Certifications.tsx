"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ExternalLink, Award, Calendar, Clock, Star } from "lucide-react";

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    duration: string;
    grade: string;
    skills: string[];
    link: string;
    description: string;
}

const certificates: Certificate[] = [
    {
        title: "Crash Course on Python",
        issuer: "Google",
        date: "March 10, 2024",
        duration: "20 hours",
        grade: "92%",
        link: "https://coursera.org/share/1e0ba949fcd2435a0a6623f20fe5cf62",
        description: "Mastered Python fundamentals for automation, including data structures (lists, dictionaries), script writing, and object-oriented programming.",
        skills: ["Python Programming", "Data Structures", "Debugging", "Program Development"]
    }
];

export function Certifications() {
    return (
        <Section id="certifications">
            <Reveal className="mb-12">
                <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                    <Reveal key={cert.title} delay={index * 0.1}>
                        <SpotlightCard className="h-full p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-accent/50 transition-all duration-300">
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-white/10 rounded-xl">
                                            <Award className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white leading-tight">{cert.title}</h3>
                                            <p className="text-accent font-medium">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                        title="View Certificate"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{cert.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{cert.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 col-span-2">
                                        <Star className="w-4 h-4 text-yellow-500" />
                                        <span>Grade Achieved: <span className="text-white font-medium">{cert.grade}</span></span>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                                    {cert.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {cert.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-white/5 text-xs text-gray-400 border border-white/5 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
