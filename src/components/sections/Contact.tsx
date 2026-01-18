"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Github, Linkedin, Mail, Code, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <div id="contact" className="relative bg-dark-bg text-white py-24 overflow-hidden">
            {/* Marquee - Styles are in globals.css */}
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

                    <Reveal delay={0.2} className="flex flex-col gap-4">
                        {[
                            { icon: Github, href: "https://github.com/Shreyas-GN", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/shreyas-gn", label: "LinkedIn" },
                            { icon: Code, href: "https://www.hackerrank.com/profile/shreyasgn11", label: "HackerRank" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(77,47,178,0.5)] transition-all duration-300 w-fit"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                                <span className="text-gray-300 group-hover:text-white font-medium tracking-wide transition-colors">
                                    {social.label}
                                </span>
                            </a>
                        ))}
                    </Reveal>
                </div>

                <div className="md:pt-4">
                    <Reveal delay={0.3}>
                        <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-300">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value });
                                                if (errors.name) setErrors({ ...errors, name: "" });
                                            }}
                                            className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all`}
                                            placeholder="John Doe"
                                            disabled={status === 'submitting'}
                                        />
                                        {errors.name && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value });
                                                if (errors.email) setErrors({ ...errors, email: "" });
                                            }}
                                            className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all`}
                                            placeholder="john@example.com"
                                            disabled={status === 'submitting'}
                                        />
                                        {errors.email && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => {
                                                setFormData({ ...formData, message: e.target.value });
                                                if (errors.message) setErrors({ ...errors, message: "" });
                                            }}
                                            rows={4}
                                            className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all resize-none`}
                                            placeholder="How can I help you?"
                                            disabled={status === 'submitting'}
                                        />
                                        {errors.message && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                                    >
                                        {status === 'submitting' ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>Send Message <Send className="w-4 h-4" /></>
                                        )}
                                    </button>
                                </>
                            )}
                        </form>
                    </Reveal>
                </div>
            </div>

            <div className="mt-24 text-center border-t border-white/10 pt-8 text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Shreyas GN.</p>
            </div>
        </div>
    );
}
