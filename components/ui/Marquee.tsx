"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    text: string;
}

export default function Marquee({ text }: MarqueeProps) {
    return (
        <div className="w-full bg-foreground text-background py-3 overflow-hidden flex items-center border-y border-foreground/10">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                }}
            >
                {/* Duplicate text to ensure seamless looping */}
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase px-8 flex-shrink-0 flex items-center">
                        {text}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-background/40 mx-8"></span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
