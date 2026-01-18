"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
}

export function Reveal({ children, width = "fit-content", delay = 0, className = "" }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className={className} style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                {children}
            </motion.div>
        </div>
    );
}
