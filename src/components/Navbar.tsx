"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { ShimmerButton } from "./magicui/shimmer-button";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNav = (href: string) => {
        setActive(href);
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#080810]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/30" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                >
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs relative overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                            fontFamily: "'Space Mono', monospace",
                            fontWeight: 700,
                        }}
                    >
                        SN
                    </div>
                    <span className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                        Nick<span className="text-violet-400">.</span>
                    </span>
                </motion.button>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNav(link.href)}
                            className="relative px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            {active === link.href && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 rounded-lg bg-white/5 border border-white/[0.08]"
                                />
                            )}
                            {link.label}
                        </button>
                    ))}
                    <div className="ml-4">
                        <ShimmerButton
                            background="linear-gradient(135deg, #8b5cf6, #3b82f6)"
                            borderRadius="10px"
                            shimmerColor="rgba(255,255,255,0.5)"
                            shimmerDuration="2.5s"
                            className="px-5 py-2 text-sm"
                            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                            onClick={() => handleNav("#contact")}
                        >
                            Hire Me
                        </ShimmerButton>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#080810]/95 backdrop-blur-xl border-b border-white/[0.06]"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNav(link.href)}
                                    className="text-left px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/[0.04] transition-all text-sm cursor-pointer"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="mt-2">
                                <ShimmerButton
                                    background="linear-gradient(135deg, #8b5cf6, #3b82f6)"
                                    borderRadius="12px"
                                    shimmerColor="rgba(255,255,255,0.5)"
                                    shimmerDuration="2.5s"
                                    className="w-full py-3 text-sm justify-center"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                                    onClick={() => handleNav("#contact")}
                                >
                                    Hire Me
                                </ShimmerButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
