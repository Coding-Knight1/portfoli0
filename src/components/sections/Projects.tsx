"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "DataLens Platform",
        subtitle: "Backend Analytics Service",
        description: "Containerized backend services using Docker. REST APIs validating analytical data across systems.",
        longDescription: "Designed and implemented modular validation workflows for analytical data. Built REST APIs to validate data across distributed systems. Focused heavily on system reliability and observability.",
        tech: ["Docker", "REST APIs", "SQL", "Python"],
        impact: "SQL optimization achieving ~35% performance improvement.",
        color: "bg-blue-50"
    },
    {
        title: "Care-Horizon",
        subtitle: "Healthcare Management Backend",
        description: "Backend APIs for patient records and appointments. Relational database schema design.",
        longDescription: "Developed comprehensive backend APIs to manage patient records and appointments. Designed a relational database schema ensuring data normalization and integrity. Implemented structured validation and error handling for robust CRUD operations.",
        tech: ["PostgreSQL", "API Design", "CRUD", "Data Integrity"],
        impact: "Structured validation and error handling significantly improved data reliability.",
        color: "bg-purple-50"
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    return (
        <Section id="projects" className="">
            <Reveal className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Selected Work</h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </Reveal>

            <div className="grid grid-cols-1 gap-12">
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 0.1} width="100%">
                        <motion.div
                            layoutId={`card-${project.title}`}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer relative overflow-hidden bg-white/5 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/10"
                            whileHover={{ y: -4 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 min-h-[400px]">
                                {/* Abstract Visual Placeholder */}
                                <div className={`h-64 md:h-full w-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center p-8`}>
                                    <div className="w-full h-full bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-inner flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white/20 tracking-widest uppercase">
                                            {project.title.substring(0, 2)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-auto">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
                                            {project.subtitle}
                                        </span>
                                        <motion.h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors flex items-center gap-2">
                                            {project.title}
                                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 translate-x-2" />
                                        </motion.h3>
                                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-sm px-4 py-2 bg-white/5 text-gray-300 rounded-lg font-medium border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Reveal>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
                        />
                        <motion.div
                            layoutId={`card-${selectedProject.title}`}
                            className="fixed inset-0 m-auto w-full max-w-3xl h-fit max-h-[90vh] overflow-y-auto bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl z-50 mx-4 md:mx-auto"
                        >
                            <div className="relative">
                                <div className={`h-40 bg-gradient-to-br from-accent/20 to-purple-900/20 w-full`} />
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                    className="absolute top-4 right-4 flex items-center justify-center p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors shadow-sm text-white border border-white/10"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-8 md:p-12">
                                <div className="mb-8">
                                    <h3 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                    <p className="text-xl text-gray-400">{selectedProject.subtitle}</p>
                                </div>

                                <div className="space-y-10">
                                    <div>
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Overview</h4>
                                        <p className="text-lg text-gray-300 leading-relaxed">
                                            {selectedProject.longDescription}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map(t => (
                                                    <span key={t} className="px-3 py-1 bg-white/10 text-gray-200 rounded-md text-sm font-medium">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Impact</h4>
                                            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                                                <p className="text-gray-200 font-medium">
                                                    {selectedProject.impact}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Section>
    );
}
