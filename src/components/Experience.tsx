"use client"

import { useRef } from "react";
import { useInView } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { BlurFade } from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { BorderBeam } from "./magicui/border-beam";

const experiences = [
    {
        type: "work",
        role: "Software Engineer",
        company: "Gaming Company",
        period: "2025 — 2026",
        description: "Developed and optimized large-scale web applications for the gaming industry. Focused on building robust internal systems using Umi and Ant Design, while managing server-side logic and API integration with Node.js.",
        tags: ["Next.js", "TypeScript", "Node.js", "Ant Design", "Umi", "JavaScript" ,"tailwind"],
        color: "#8b5cf6",
        beamFrom: "#8b5cf6",
        beamTo: "#a78bfa",
    },
    {
        type: "work",
        role: "UI/UX Designer",
        company: "Gaming Company",
        period: "2024 — 2025",
        description: "Focused on user-centric design, creating intuitive interfaces and prototypes in Figma. Bridged the gap between design concepts and technical implementation.",
        tags: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
        color: "#3b82f6",
        beamFrom: "#3b82f6",
        beamTo: "#60a5fa",
    },
    {
        type: "education",
        role: "Final Thesis Project (Graduate)",
        company: "Career Center Management System",
        period: "2024",
        description: "Architected a comprehensive management system to digitize career services. Engineered complex database schemas and relational data models using MySQL and Navicat to handle multi-user roles and recruitment workflows.",
        tags: ["PHP", "MySQL", "Database Design", "Navicat", "System Logic", "Backend"],
        color: "#f59e0b",
        beamFrom: "#f59e0b",
        beamTo: "#fbbf24",
    },
    {
        type: "work",
        role: "C# Developer Intern",
        company: "Software Internship",
        period: "2023 — 2024",
        description: "Gained hands-on experience in desktop and web development using C#. Focused on object-oriented programming (OOP) and software design patterns.",
        tags: ["C#", ".NET", "OOP", "SQL Server"],
        color: "#34d399",
        beamFrom: "#34d399",
        beamTo: "#6ee7b7",
    },
];

const typeIcon: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
    work: Briefcase,
    education: GraduationCap,
    award: Award,
};

export function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="experience"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #0a0a18 0%, #080810 100%)" }}
        >
            {/* Glow */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: 500,
                    height: 500,
                    left: "-5%",
                    bottom: "20%",
                    background: "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)",
                    borderRadius: "50%",
                }}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <BlurFade delay={0.1} inView>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs text-violet-400 uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
                            04 / Experience
                        </span>
                        <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.5), transparent)" }} />
                    </div>
                    <h2
                        className="text-white mb-14"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Career{" "}
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)" }}>
                            Journey
                        </span>
                    </h2>
                </BlurFade>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line */}
                    <div
                        className="absolute left-6 top-0 bottom-0 w-px md:left-1/2"
                        style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.5), rgba(59,130,246,0.2), transparent)" }}
                    />

                    <div className="flex flex-col gap-8">
                        {experiences.map((exp, i) => {
                            const Icon = typeIcon[exp.type];
                            const isLeft = i % 2 === 0;

                            return (
                                <BlurFade key={i} delay={0.1 + i * 0.1} inView>
                                    <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                        {/* Dot */}
                                        <div
                                            className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 md:absolute md:left-1/2 md:-translate-x-1/2"
                                            style={{
                                                background: `${exp.color}15`,
                                                boxShadow: `0 0 20px ${exp.color}25`,
                                            }}
                                        >
                                            <Icon size={18} style={{ color: exp.color }} />
                                        </div>

                                        {/* Card */}
                                        <div className={`flex-1 md:w-[calc(50%-3.5rem)] ${isLeft ? "md:pr-10" : "md:pl-10 md:ml-auto"}`}>
                                            <MagicCard
                                                className="relative p-5"
                                                gradientColor={exp.color}
                                                gradientOpacity={0.1}
                                                gradientSize={220}
                                            >
                                                <BorderBeam
                                                    colorFrom={exp.beamFrom}
                                                    colorTo={exp.beamTo}
                                                    size={120}
                                                    duration={6 + i}
                                                    borderWidth={1}
                                                />
                                                <div className={`flex items-center gap-2 mb-1 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                                                    <span
                                                        className="text-xs uppercase tracking-widest"
                                                        style={{ fontFamily: "'Space Mono', monospace", color: exp.color }}
                                                    >
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <h3
                                                    className="text-white mb-0.5"
                                                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                                                >
                                                    {exp.role}
                                                </h3>
                                                <p
                                                    className="mb-3 text-sm"
                                                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: exp.color }}
                                                >
                                                    {exp.company}
                                                </p>
                                                <p
                                                    className="text-gray-500 text-sm mb-4"
                                                    style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.7 }}
                                                >
                                                    {exp.description}
                                                </p>
                                                <div className={`flex flex-wrap gap-1.5 ${isLeft ? "" : "md:justify-end"}`}>
                                                    {exp.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2.5 py-0.5 rounded-md text-xs text-gray-600 border border-white/5 bg-white/[0.02]"
                                                            style={{ fontFamily: "'Space Mono', monospace" }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </MagicCard>
                                        </div>
                                    </div>
                                </BlurFade>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
