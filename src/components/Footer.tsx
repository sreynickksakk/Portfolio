"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { MagicCard } from "./magicui/magic-card";
import { BlurFade } from "./magicui/blur-fade";

const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
];

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export function Footer() {
    return (
        <footer className="relative py-12 border-t border-white/[0.05]" style={{ background: "#080810" }}>
            <div className="max-w-7xl mx-auto px-6">
                <BlurFade delay={0.1} inView>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div
                                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs"
                                style={{ background: "linear-gradient(135deg, #8b5cf6, #3b82f6)", fontFamily: "'Space Mono', monospace", fontWeight: 700 }}
                            >
                                SN
                            </div>
                            <span className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                NICK<span className="text-violet-500">.</span>
                            </span>
                        </div>

                        {/* Nav Links */}
                        <div className="flex items-center flex-wrap justify-center gap-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="text-gray-600 hover:text-gray-300 transition-colors text-xs cursor-pointer"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-2">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    whileHover={{ scale: 1.12, y: -2 }}
                                    className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-gray-600 hover:text-gray-300 hover:border-violet-500/30 transition-all"
                                    title={label}
                                >
                                    <Icon size={15} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={0.2} inView>
                    <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3">
                        <p
                            className="text-gray-700 text-xs flex items-center gap-1.5"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            © 2026 John Doe. Built with{" "}
                            <Heart size={11} className="text-red-500 fill-red-500" />
                            {" "}using Magic UI + Motion
                        </p>
                        <p className="text-gray-700 text-xs" style={{ fontFamily: "'Space Mono', monospace" }}>
                            React · TypeScript · Tailwind CSS
                        </p>
                    </div>
                </BlurFade>
            </div>
        </footer>
    );
}
