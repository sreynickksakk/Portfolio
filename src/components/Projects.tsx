"use client"

import { useRef, useState } from "react";
import { useInView, motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { BlurFade } from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { BorderBeam } from "./magicui/border-beam";
import { ShimmerButton } from "./magicui/shimmer-button";

const projects = [
    {
        id: 1,
        title: "NeuroFlow Dashboard",
        description: "AI-powered analytics platform with real-time data visualization, machine learning insights, and automated reporting for enterprise clients.",
        image: "https://images.unsplash.com/photo-1585123607190-72ec2979a269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkZXNpZ258ZW58MXx8fHwxNzczMzMxMzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["React", "TypeScript", "D3.js", "Python"],
        category: "Web App",
        beamColor1: "#8b5cf6",
        beamColor2: "#3b82f6",
        gradientColor: "#8b5cf6",
    },
    {
        id: 2,
        title: "Lumina E-Commerce",
        description: "Modern e-commerce platform with seamless checkout, personalized recommendations, and lightning-fast performance.",
        image: "https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MzM4NTk2NXww&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
        category: "E-Commerce",
        beamColor1: "#3b82f6",
        beamColor2: "#06b6d4",
        gradientColor: "#3b82f6",
    },
    {
        id: 3,
        title: "MindScape Mobile App",
        description: "Mental wellness app featuring meditation guides, mood tracking, and AI-driven personalized therapy sessions.",
        image: "https://images.unsplash.com/photo-1590416986650-f8760d42dbd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzczMzg1OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["React Native", "Node.js", "TensorFlow", "Firebase"],
        category: "Mobile",
        beamColor1: "#34d399",
        beamColor2: "#3b82f6",
        gradientColor: "#34d399",
    },
    {
        id: 4,
        title: "Quantum AI Platform",
        description: "Enterprise ML platform enabling businesses to deploy, monitor, and scale AI models with zero infrastructure overhead.",
        image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMHRlY2glMjBwcm9qZWN0fGVufDF8fHx8MTc3MzM4NTk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Python", "TensorFlow", "Docker", "Kubernetes"],
        category: "AI/ML",
        beamColor1: "#f59e0b",
        beamColor2: "#ef4444",
        gradientColor: "#f59e0b",
    },
    {
        id: 5,
        title: "Prisma Design System",
        description: "Comprehensive UI library with 200+ components, design tokens, and Figma integration for modern web apps.",
        image: "https://images.unsplash.com/photo-1763931504138-3b9fb539f737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWwlMjBkaWdpdGFsJTIwYXJ0fGVufDF8fHx8MTc3MzM4NTk2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["React", "Storybook", "Figma", "Tailwind"],
        category: "Design System",
        beamColor1: "#ec4899",
        beamColor2: "#8b5cf6",
        gradientColor: "#ec4899",
    },
    {
        id: 6,
        title: "DevFlow CLI Tool",
        description: "Developer productivity tool that automates repetitive workflows, scaffolding, and code generation with AI assistance.",
        image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwc2V0dXB8ZW58MXx8fHwxNzczMzA1MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["TypeScript", "Node.js", "OpenAI", "CLI"],
        category: "Web App",
        beamColor1: "#06b6d4",
        beamColor2: "#8b5cf6",
        gradientColor: "#06b6d4",
    },
];

const filters = ["All", "Web App", "Mobile", "E-Commerce", "AI/ML", "Design System"];

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [activeFilter, setActiveFilter] = useState("All");
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const filtered = projects.filter((p) => activeFilter === "All" || p.category === activeFilter);

    return (
        <section
            id="projects"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: "#080810" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <BlurFade delay={0.1} inView>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs text-violet-400 uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
                                    03 / Projects
                                </span>
                                <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.5), transparent)" }} />
                            </div>
                            <h2
                                className="text-white"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 800,
                                    fontSize: "clamp(2rem, 4vw, 3rem)",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Selected{" "}
                                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)" }}>
                                    Work
                                </span>
                            </h2>
                        </BlurFade>
                    </div>
                    <BlurFade delay={0.2} inView>
                        <p className="text-gray-500 max-w-xs text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.7 }}>
                            Projects I've built — from solo side projects to large-scale team efforts.
                        </p>
                    </BlurFade>
                </div>

                {/* Filters */}
                <BlurFade delay={0.2} inView>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className="relative px-4 py-1.5 rounded-lg text-sm transition-all cursor-pointer overflow-hidden"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 500,
                                    color: activeFilter === f ? "#fff" : "#6b7280",
                                    background: activeFilter === f
                                        ? "linear-gradient(135deg, #8b5cf6, #3b82f6)"
                                        : "rgba(255,255,255,0.03)",
                                    border: activeFilter === f ? "none" : "1px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                {activeFilter === f && <BorderBeam size={80} duration={3} colorFrom="#ffffff44" colorTo="transparent" borderWidth={0} />}
                                {f}
                            </button>
                        ))}
                    </div>
                </BlurFade>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map((project, i) => (
                        <BlurFade key={project.id} delay={0.1 + i * 0.07} inView>
                            <motion.div
                                layout
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="relative group h-full"
                            >
                                <MagicCard
                                    className="relative overflow-hidden h-full flex flex-col"
                                    gradientColor={project.gradientColor}
                                    gradientOpacity={0.12}
                                    gradientSize={250}
                                >
                                    {/* Border beam on hover */}
                                    {hoveredId === project.id && (
                                        <BorderBeam
                                            colorFrom={project.beamColor1}
                                            colorTo={project.beamColor2}
                                            size={150}
                                            duration={4}
                                            borderWidth={1.5}
                                        />
                                    )}

                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                                        />
                                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 20%, rgba(8,8,16,0.97))" }} />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-400"
                                            style={{ background: `linear-gradient(135deg, ${project.beamColor1}, ${project.beamColor2})` }}
                                        />
                                        <div
                                            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs text-white border border-white/10 backdrop-blur-sm"
                                            style={{ fontFamily: "'Space Mono', monospace", background: "rgba(0,0,0,0.5)" }}
                                        >
                                            {project.category}
                                        </div>
                                        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {[Github, ExternalLink].map((Icon, ii) => (
                                                <motion.a
                                                    key={ii}
                                                    href="#"
                                                    whileHover={{ scale: 1.1 }}
                                                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white border border-white/20 bg-black/60 backdrop-blur-sm"
                                                >
                                                    <Icon size={13} />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <h3
                                                className="text-white group-hover:text-violet-300 transition-colors"
                                                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                                            >
                                                {project.title}
                                            </h3>
                                            <ArrowUpRight size={16} className="text-gray-600 group-hover:text-violet-400 transition-colors flex-shrink-0 mt-0.5" />
                                        </div>
                                        <p
                                            className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1"
                                            style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.65 }}
                                        >
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded-md text-xs text-gray-500 border border-white/5 bg-white/[0.02]"
                                                    style={{ fontFamily: "'Space Mono', monospace" }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </MagicCard>
                            </motion.div>
                        </BlurFade>
                    ))}
                </div>

                {/* CTA */}
                <BlurFade delay={0.5} inView>
                    <div className="flex justify-center mt-12">
                        <ShimmerButton
                            background="rgba(255,255,255,0.03)"
                            borderRadius="12px"
                            shimmerColor="rgba(139,92,246,0.4)"
                            shimmerDuration="3s"
                            className="px-8 py-3 border border-white/10 text-gray-300 hover:text-white"
                            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                        >
                            View All Projects →
                        </ShimmerButton>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
