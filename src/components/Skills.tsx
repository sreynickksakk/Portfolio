"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion"; 
import { BlurFade } from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { Marquee } from "./magicui/marquee";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#8b5cf6",
        skills: [
            { name: "React / Next.js", level: 95 },
            { name: "TypeScript", level: 92 },
            { name: "Ant Design / Umi", level: 60 },
            { name: "Tailwind CSS", level: 92 },
        ],
    },
    {
        title: "Backend & Systems",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#3b82f6",
        skills: [
            { name: "Node.js / JavaScript", level: 88 },
            { name: "PHP / MySQL", level: 85 },
            { name: "NestJS", level: 60 },
            { name: "Prisma / Zustand", level: 80 },
        ],
    },
    {
        title: "Design & Tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "#34d399",
        skills: [
            { name: "Figma (UI/UX)", level: 90 },
            { name: "Navicat / PhpMyAdmin", level: 88 },
            { name: "Git / GitHub", level: 85 },
            { name: "Bootstrap", level: 88 },
        ],
    },
];

const techCards = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", color: "#FFFFFF" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#6BBF4E" },
    { name: "Ant Design", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/antdesign.svg", color: "#1890FF" },
    { name: "UmiJS", icon: "https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png", color: "#E91E63" },
    { name: "Tailwind", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg", color: "#06B6D4" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#239120" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05622" },
    { name: "Prisma", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/prisma.svg", color: "#2D3748" },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="mb-4 group">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                    {name}
                </span>
                <span className="text-xs font-mono" style={{ color }}>
                    {level}%
                </span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden border border-white/[0.03]">
                <motion.div
                    className="h-full rounded-full"
                    style={{ background: color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
            </div>
        </div>
    );
}

function TechCard({ name, icon, color }: { name: string; icon: string; color: string }) {
    return (
        <div className="flex items-center gap-3 px-5 py-2.5 mx-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm group hover:border-white/20 transition-all duration-300">
            <img
                src={icon}
                alt={name}
                className={`w-5 h-5 object-contain transition-all duration-500 ${name === "Next.js" ? "invert opacity-80" : ""}`}
            />
            <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
                {name}
            </span>
        </div>
    );
}

export function Skills() {
    const ref = useRef(null);

    return (
        <section
            id="skills"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: "#080810" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <BlurFade delay={0.1} inView>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs text-violet-400 uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
                            02 / Skills
                        </span>
                        <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.5), transparent)" }} />
                    </div>
                    <h2 className="text-white mb-14 text-4xl md:text-5xl font-extrabold tracking-tight">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Expertise</span>
                    </h2>
                </BlurFade>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {skillCategories.map((cat, ci) => (
                        <BlurFade key={cat.title} delay={0.15 + ci * 0.1} inView>
                            <MagicCard className="p-7 h-full" gradientColor={cat.color} gradientOpacity={0.08}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center p-2 bg-white/5 border border-white/10">
                                        <img src={cat.icon} alt={cat.title} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-white text-lg font-bold">{cat.title}</h3>
                                </div>
                                {cat.skills.map((skill, si) => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} color={cat.color} index={si} />
                                ))}
                            </MagicCard>
                        </BlurFade>
                    ))}
                </div>

                <BlurFade delay={0.5} inView>
                    <div className="relative pt-10 border-t border-white/5">
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#080810] to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#080810] to-transparent" />

                        <Marquee pauseOnHover speed={40} className="mb-4">
                            {techCards.slice(0, 8).map((t) => <TechCard key={t.name} {...t} />)}
                        </Marquee>
                        <Marquee pauseOnHover speed={40} reverse>
                            {techCards.slice(8).map((t) => <TechCard key={t.name} {...t} />)}
                        </Marquee>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}