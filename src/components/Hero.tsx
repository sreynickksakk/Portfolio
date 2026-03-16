"use client"

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Meteors } from "./magicui/meteors";
import { ShimmerButton } from "./magicui/shimmer-button";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { RetroGrid } from "./magicui/retro-grid";
import { SparklesText } from "./magicui/sparkles-text";

const roles = [
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Specialist",
    "Product-Minded Developer"
];
const SOCIAL_LINKS = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/sreynickksakk"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/your-profile"
    },
    {
        icon: Twitter,
        label: "Twitter",
        href: "#"
    },
];
function WordRotate() {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index];
        if (!deleting && displayed === current) {
            const t = setTimeout(() => setDeleting(true), 2000);
            return () => clearTimeout(t);
        }
        if (deleting && displayed === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % roles.length);
            return;
        }
        const t = setTimeout(() => {
            setDisplayed((prev) =>
                deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
            );
        }, deleting ? 35 : 75);
        return () => clearTimeout(t);
    }, [displayed, deleting, index]);

    return (
        <span
            className="text-transparent bg-clip-text"
            style={{
                backgroundImage: "linear-gradient(90deg, #c4b5fd, #93c5fd, #6ee7b7)",
                backgroundSize: "200% auto",
                animation: "gradient-shift 4s linear infinite",
            }}
        >
            {displayed}
            <span className="text-violet-400 animate-pulse">|</span>
            <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </span>
    );
}

const stats = [
    { value: 5, suffix: "+", label: "Years Exp." },
    { value: 50, suffix: "+", label: "Projects" },
    { value: 30, suffix: "+", label: "Clients" },
    { value: 10, suffix: "+", label: "Awards" },
];

export function Hero() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: "#080810" }}
        >
            {/* Retro grid */}
            <RetroGrid opacity={0.35} />

            {/* Meteors */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Meteors number={18} />
            </div>

            {/* Glow orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute rounded-full"
                    style={{
                        width: 700,
                        height: 700,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -65%)",
                        background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: 400,
                        height: 400,
                        bottom: "15%",
                        right: "5%",
                        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex justify-center mb-8"
                >
                    <AnimatedGradientText>
                        ✨ Available for new opportunities
                    </AnimatedGradientText>
                </motion.div>

                {/* Name with Sparkles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="mb-3"
                >
                    <h1
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(3rem, 9vw, 6.5rem)",
                            lineHeight: 1.0,
                            letterSpacing: "-0.03em",
                            color: "#fff",
                        }}
                    >
                        Hi, I'm{" "}
                        <SparklesText
                            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]"
                            colors={{ first: "#a78bfa", second: "#60a5fa" }}
                            sparklesCount={8}

                        >
                            Sreynich
                        </SparklesText>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mb-5"
                >
                    <p
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 500,
                            fontSize: "clamp(1.3rem, 3vw, 2rem)",
                            color: "#9ca3af",
                            lineHeight: 1.4,
                        }}
                    >
                         {" "}
                        <WordRotate />
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="text-gray-500 max-w-xl mx-auto mb-10"
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1rem",
                        lineHeight: 1.75,
                    }}
                >
                    Junior Software Engineer dedicated to building high-performance web applications using React, Next.js, and TypeScript.
                    I focus on writing clean, maintainable code and creating seamless user experiences that solve real-world problems.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-12"
                >
                    <ShimmerButton
                        background="linear-gradient(135deg, #8b5cf6, #3b82f6)"
                        borderRadius="12px"
                        shimmerColor="rgba(255,255,255,0.6)"
                        shimmerDuration="2.5s"
                        className="px-8 py-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
                        onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        View My Work
                    </ShimmerButton>

                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3 rounded-xl text-gray-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                        }}
                    >
                        Let's Talk →
                    </motion.button>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.85 }}
                    className="flex justify-center gap-3 mb-14"
                >
                    {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -2 }}
                            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
                            title={label}
                        >
                            <Icon size={18} />
                        </motion.a>
                    ))}
                </motion.div>


            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700 cursor-pointer hover:text-gray-500 transition-colors"
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            >
                <span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Scroll
                </span>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowDown size={14} />
                </motion.div>
            </motion.div>
        </section>
    );
}
