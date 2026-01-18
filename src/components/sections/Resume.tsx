"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Download, Award } from "lucide-react";

export function Resume() {
    return (
        <Section id="resume">
            <div className="flex justify-between items-center mb-12">
                <Reveal>
                    <h2 className="text-3xl font-bold text-white">Resume</h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <a href="/resume.pdf" download className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm shadow-sm font-semibold">
                        <Download className="w-4 h-4" />
                        Download PDF
                    </a>
                </Reveal>
            </div>

            <div className="space-y-16 border-l-2 border-white/10 pl-8 ml-4 relative">
                <Reveal delay={0.2}>
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-dark-bg shadow-sm" />
                        <h3 className="text-xl font-bold text-white">Backend-Focused Software Engineer</h3>
                        <p className="text-gray-400 mb-4 font-mono text-sm">Present</p>
                        <div className="text-gray-300 max-w-2xl space-y-2">
                            <p>
                                Specializing in building modular backend services and optimizing database performance. Key responsibilities include:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-400">
                                <li>Designing and implementing RESTful APIs</li>
                                <li>Optimizing SQL queries and database schemas</li>
                                <li>Ensuring data integrity and system reliability</li>
                            </ul>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-600 border-4 border-dark-bg shadow-sm" />
                        <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-amber-900/20 rounded-lg">
                                    <Award className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-200 block">Karnataka PGCET Rank: 625</span>
                                    <p className="text-sm text-gray-500 mt-1">Significant achievement demonstrating strong aptitude in Computer Science fundamentals among thousands of candidates.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-amber-900/20 rounded-lg">
                                    <Award className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-200 block">HackerRank Python Golden Badge</span>
                                    <p className="text-sm text-gray-500 mt-1">Recognized for problem-solving skills and proficiency in Python programming.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-600 border-4 border-dark-bg shadow-sm" />
                        <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Git & GitHub", "Python Fundamentals", "Agile Methodologies"].map(cert => (
                                <span key={cert} className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10 shadow-sm font-medium hover:bg-white/10 transition-colors">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    )
}
