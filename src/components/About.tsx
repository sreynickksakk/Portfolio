"use client"

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import { BlurFade } from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { DotPattern } from "./magicui/dot-pattern";
import { ShineBorder } from "./magicui/shine-border";
import { OrbitingCircles } from "./magicui/orbiting-circles";
import { ShimmerButton } from "./magicui/shimmer-button";
import { cn } from "../lib/utils";

const highlights = [
    { icon: "🎯", label: "Goal-Oriented" },
    { icon: "🚀", label: "Fast Learner" },
    { icon: "🎨", label: "Creative Thinker" },
    { icon: "🤝", label: "Team Player" },
];

const techIcons = [
    { emoji: "⚛️", label: "React", bg: "#61DAFB22" },
    { emoji: "🔷", label: "TypeScript", bg: "#3178C622" },
    { emoji: "🟢", label: "Node.js", bg: "#33993322" },
    { emoji: "🎨", label: "Figma", bg: "#F24E1E22" },
    { emoji: "▲", label: "Next.js", bg: "#ffffff11" },
];

export function About() {
    const ref = useRef(null);

    return (
        <section
            id="about"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: "#080810" }}
        >
            {/* Dot pattern */}
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn("opacity-20", "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]")}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <BlurFade delay={0.1} inView>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs text-violet-400 uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
                            01 / About Me
                        </span>
                        <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.5), transparent)" }} />
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Orbiting Circles visual */}
                    <BlurFade delay={0.2} inView>
                        <div className="relative h-[420px] flex items-center justify-center">
                            {/* Center image */}
                            <ShineBorder
                                borderRadius={999}
                                borderWidth={2}
                                color={["#8b5cf6", "#3b82f6", "#06b6d4"]}
                                duration={6}
                                className="relative"
                            >
                                <div className="w-36 h-36 rounded-full overflow-hidden">
                                    <img
                                        src="/profile.jpg"
                                        alt="Developer"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </ShineBorder>

                            {/* Orbiting inner ring */}
                            <div className="absolute inset-0">
                                <OrbitingCircles radius={100} duration={18} path>
                                    {techIcons.slice(0, 3).map((t, i) => (
                                        <motion.div
                                            key={t.label}
                                            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-lg backdrop-blur-sm"
                                            style={{ background: "rgba(8,8,16,0.9)", boxShadow: "0 0 12px rgba(139,92,246,0.2)" }}
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            {t.emoji}
                                        </motion.div>
                                    ))}
                                </OrbitingCircles>
                            </div>

                            {/* Orbiting outer ring */}
                            <div className="absolute inset-0">
                                <OrbitingCircles radius={170} duration={28} reverse path>
                                    {techIcons.slice(3).map((t) => (
                                        <motion.div
                                            key={t.label}
                                            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-lg backdrop-blur-sm"
                                            style={{ background: "rgba(8,8,16,0.9)", boxShadow: "0 0 12px rgba(59,130,246,0.2)" }}
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            {t.emoji}
                                        </motion.div>
                                    ))}
                                </OrbitingCircles>
                            </div>

                            {/* Glow behind */}
                            <div
                                className="absolute inset-0 pointer-events-none rounded-full"
                                style={{
                                    background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 65%)",
                                }}
                            />

                            {/* Floating stat cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 right-4 z-20"
                            >

                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                className="absolute bottom-8 left-4 z-20"
                            >

                            </motion.div>
                        </div>
                    </BlurFade>

                    {/* Right: Content */}
                    <div>
                        <BlurFade delay={0.3} inView>
                            <h2
                                className="text-white mb-5"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 800,
                                    fontSize: "clamp(2rem, 4vw, 3rem)",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Crafting Digital{" "}
                                <span
                                    className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)" }}
                                >
                                    Experiences
                                </span>{" "}
                                with Passion
                            </h2>
                        </BlurFade>

                        <BlurFade delay={0.4} inView>
                            <p
                                className="text-gray-400 mb-4"
                                style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.8, fontSize: "1rem" }}
                            >
                                I'm a Junior Software Engineer and Frontend Specialist. I focus on building high-quality web applications—transforming complex requirements into pixel-perfect interfaces and seamless user experiences.
                            </p>
                            <p
                                className="text-gray-500 mb-7"
                                style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.8, fontSize: "0.95rem" }}
                            >
                                When I'm not coding, I enjoy exploring modern frontend architectures, sharing my knowledge with others, and constantly refining my craft to build scalable digital solutions.
                            </p>
                        </BlurFade>

                        {/* Highlights with MagicCard */}
                        <BlurFade delay={0.5} inView>
                            <div className="grid grid-cols-2 gap-3 mb-7">
                                {highlights.map(({ icon, label }) => (
                                    <MagicCard key={label} className="flex items-center gap-3 px-4 py-3" gradientColor="#8b5cf6" gradientOpacity={0.08}>
                                        <span className="text-xl">{icon}</span>
                                        <span className="text-gray-300 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                                            {label}
                                        </span>
                                    </MagicCard>
                                ))}
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.6} inView>
                            <div className="flex flex-col gap-2 mb-7">
                                {[
                                    { icon: MapPin, text: "Phnom Penh, Cambodia" },
                                    { icon: Mail, text: "sreynichsakk@gmail.com" },
                                    { icon: Phone, text: "+855 (0) 93200971" },
                                ].map(({ icon: Icon, text }) => (
                                    <div key={text} className="flex items-center gap-3 text-gray-500">
                                        <Icon size={14} className="text-violet-400" />
                                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.7} inView>
                            <a
                                href="/cv.pdf"
                                download="sak_sreynich_resume.pdf" 
                                target="_blank"            
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }} 
                            >
                                <ShimmerButton
                                    background="linear-gradient(135deg, #8b5cf6, #3b82f6)"
                                    borderRadius="12px"
                                    shimmerColor="rgba(255,255,255,0.5)"
                                    shimmerDuration="2.5s"
                                    className="px-6 py-3 flex items-center gap-2" 
                                    style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        cursor: "pointer"
                                    }}
                                >
                                    <Download size={15} />
                                    Download Resume
                                </ShimmerButton>
                            </a>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
}
