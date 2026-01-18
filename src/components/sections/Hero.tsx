"use client";

import { useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import LightRays from "@/components/ui/LightRays";

export function Hero() {

    return (
        <div id="home" className="relative h-screen flex flex-col items-center justify-center bg-dark-bg text-center px-4 overflow-hidden">
            {/* Light Rays Background */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center">

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
        </div>
    );
}
