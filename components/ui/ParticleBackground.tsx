"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParticleBackground() {
    const [mounted, setMounted] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setMounted(true);
        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted || windowDimensions.width === 0) {
        return <div className="absolute inset-0 bg-transparent" />;
    }

    // Generate random particles
    const particles = Array.from({ length: 70 }).map((_, i) => {
        const size = Math.random() * 20 + 4; // 4px to 24px
        const initialX = Math.random() * windowDimensions.width;
        const initialY = Math.random() * windowDimensions.height;

        // Minimalist stark theme - subtle grays and blacks
        const isDark = Math.random() > 0.5;
        const color = isDark ? "#1A1A1A" : "#E5E5E5";
        const opacity = Math.random() * 0.15 + 0.05; // Very subtle, 0.05 to 0.2

        // Animation targets
        const duration = Math.random() * 30 + 15; // 15s to 45s

        return {
            id: i,
            size,
            initialX,
            initialY,
            color,
            opacity,
            duration,
            targetX: initialX + (Math.random() - 0.5) * windowDimensions.width * 0.6,
            targetY: initialY + (Math.random() - 0.5) * windowDimensions.height * 0.6,
            targetX2: initialX + (Math.random() - 0.5) * windowDimensions.width * 0.6,
            targetY2: initialY + (Math.random() - 0.5) * windowDimensions.height * 0.6,
            isGlowing: size > 12
        };
    });

    return (
        <div className="absolute inset-0 overflow-hidden bg-white pointer-events-none z-0">

            {/* Abstract Subtle Orbs in Corners */}
            <motion.div
                className="absolute bottom-[-15%] right-[-5%] rounded-full bg-foreground/5"
                style={{ width: '50vw', height: '50vw', filter: 'blur(100px)' }}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute top-[-10%] left-[-10%] rounded-full bg-foreground/5"
                style={{ width: '40vw', height: '40vw', filter: 'blur(100px)' }}
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-foreground/5 tracking-[0.5em] text-8xl font-black whitespace-nowrap z-0 select-none">
                KESERENE
            </div>

            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        filter: p.isGlowing ? 'blur(1px)' : 'none',
                        boxShadow: 'none'
                    }}
                    initial={{
                        x: p.initialX,
                        y: p.initialY,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: [p.initialX, p.targetX, p.targetX2, p.initialX],
                        y: [p.initialY, p.targetY, p.targetY2, p.initialY],
                        opacity: [0, p.opacity, p.opacity * 0.5, 0],
                        scale: [0.5, 1, 0.8, 0.5]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
}
