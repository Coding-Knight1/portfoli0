"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";
import { Magnetic } from "@/components/ui/Magnetic";

const navItems = [
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Certifications", path: "certifications" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
];

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        const element = document.getElementById(path);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center",
                scrolled ? "bg-dark-bg/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
            )}
        >
            <a
                href="#home"
                onClick={(e) => handleClick(e, "home")}
                className="text-xl font-bold tracking-tight text-white mix-blend-difference"
            >
                Shreyas GN
            </a>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <a
                        key={item.path}
                        href={`#${item.path}`}
                        onClick={(e) => handleClick(e, item.path)}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        {item.name}
                    </a>
                ))}
                <Magnetic>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="inline-flex items-center justify-center px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Resume
                    </a>
                </Magnetic>
            </div>
        </nav>
    );
}
