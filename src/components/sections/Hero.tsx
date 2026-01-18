"use client";

import { useMotionValue, useSpring, motion, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 100 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Parallax effect for heavy elements (move opposite to mouse)
    const backgroundX = useTransform(x, [-500, 500], [20, -20]);
    const backgroundY = useTransform(y, [-500, 500], [20, -20]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX - innerWidth / 2;
            const y = e.clientY - innerHeight / 2;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div id="home" className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dark-bg to-[#0d0d1a] text-center px-4 overflow-hidden">
            {/* Ambient Background Glow with Parallax */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none"
                style={{ x: backgroundX, y: backgroundY }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none"
                style={{ x: useTransform(x, [-500, 500], [-30, 30]), y: useTransform(y, [-500, 500], [-30, 30]) }}
            />

            <Reveal>
                <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-4 tracking-wide">
                    Hello, I&apos;m
                </h2>
            </Reveal>

            <Reveal delay={0.1}>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6">
                    Shreyas GN
                </h1>
            </Reveal>

            <Reveal delay={0.2}>
                <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Crafting robust <span className="text-accent font-medium">Backend Systems</span> & <span className="text-accent font-medium">Scalable APIs</span>
                </p>
            </Reveal>

            <Reveal delay={0.3} className="flex gap-6">
                <Magnetic>
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(94,92,230,0.5)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Work <ArrowRight className="w-4 h-4" />
                        </span>
                    </a>
                </Magnetic>
            </Reveal>

            <div className="absolute bottom-10 animate-bounce">
                <ChevronDown className="w-6 h-6 text-gray-500" />
            </div>
        </div>
    );
}
