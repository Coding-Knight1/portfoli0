"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <div id="contact" className="relative bg-dark-bg text-white py-24 overflow-hidden">
            {/* Marquee */}
            <div className="relative flex overflow-x-hidden mb-24 pointer-events-none opacity-10 select-none">
                <div className="animate-marquee whitespace-nowrap py-4">
                    <span className="text-[10rem] md:text-[14rem] font-bold mx-4">LET&apos;S WORK TOGETHER</span>
                    <span className="text-[10rem] md:text-[14rem] font-bold mx-4">LET&apos;S WORK TOGETHER</span>
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4">
                    <span className="text-[10rem] md:text-[14rem] font-bold mx-4">LET&apos;S WORK TOGETHER</span>
                    <span className="text-[10rem] md:text-[14rem] font-bold mx-4">LET&apos;S WORK TOGETHER</span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                            Currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                    </Reveal>

                    <Reveal delay={0.2} className="flex gap-6">
                        {[
                            { icon: Github, href: "https://github.com" },
                            { icon: Linkedin, href: "https://linkedin.com" },
                            { icon: Code, href: "https://hackerrank.com" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group"
                            >
                                <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                            </a>
                        ))}
                    </Reveal>
                </div>

                <div className="md:pt-4">
                    <Reveal delay={0.3}>
                        <a
                            href="mailto:shreyas@example.com"
                            className="block p-12 bg-white/5 rounded-3xl border border-white/10 hover:border-accent hover:bg-white/10 transition-all group text-center"
                        >
                            <Mail className="w-12 h-12 text-gray-400 mx-auto mb-6 group-hover:text-accent transition-colors" />
                            <h3 className="text-2xl font-semibold mb-2">Send an Email</h3>
                            <p className="text-gray-400 group-hover:text-white transition-colors">shreyas@example.com</p>
                        </a>
                    </Reveal>
                </div>
            </div>

            <div className="mt-24 text-center border-t border-white/10 pt-8 text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Shreyas GN.</p>
            </div>


        </div>
    )
}
