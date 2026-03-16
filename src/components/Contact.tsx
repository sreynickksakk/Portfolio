"use client"

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Send, Mail, MessageSquare, User, Loader2, CheckCircle, Zap, AlertCircle } from "lucide-react";
import { BlurFade } from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { ShimmerButton } from "./magicui/shimmer-button";
import { BorderBeam } from "./magicui/border-beam";
import { ShineBorder } from "./magicui/shine-border";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "../lib/utils";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "sreynichsakk@gmail.com",
        href: "mailto:sreynichsakk@gmail.com",
        color: "#8b5cf6",
    },
    {
        icon: MessageSquare,
        label: "Telegram",
        value: "@sreynickksakk",
        href: "https://t.me/sreynichsakk",
        color: "#3b82f6",
    },
    {
        icon: Zap,
        label: "Response Time",
        value: "Within 24 hours",
        href: "#",
        color: "#34d399",
    },
];

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    name: form.name,
                    email: form.email,
                    subject: `Portfolio Contact: ${form.subject}`,
                    from_name: "Portfolio Contact Form",
                    message: form.message,
                    redirect: "https://web3forms.com/success"
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("sent");
                setForm({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: "#080810" }}
        >
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn("opacity-15", "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]")}
            />

            {/* Glow Effect */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: 600,
                    height: 600,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                    background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
                    borderRadius: "50%",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <BlurFade delay={0.1} inView>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5))" }} />
                            <span className="text-xs text-violet-400 uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
                                05 / Contact
                            </span>
                            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.5), transparent)" }} />
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.2} inView>
                        <h2 className="text-white mb-4 font-extrabold text-4xl tracking-tight">
                            Let's Build Something{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                                Amazing
                            </span>
                        </h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
                            Have a project in mind? Want to collaborate? I'd love to hear from you — my inbox is always open!
                        </p>
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                    {/* Left side: Info */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <BlurFade delay={0.25} inView>
                            {contactMethods.map(({ icon: Icon, label, value, href, color }) => (
                                <a key={label} href={href} target={href.startsWith('http') ? "_blank" : "_self"} className="block mb-3">
                                    <MagicCard
                                        className="flex items-center gap-4 p-4 group"
                                        gradientColor={color}
                                        gradientOpacity={0.1}
                                    >
                                        <div
                                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                                        >
                                            <Icon size={16} style={{ color }} />
                                        </div>
                                        <div>
                                            <div className="text-gray-600 text-xs font-mono">{label}</div>
                                            <div className="text-gray-300 text-sm group-hover:text-white transition-colors font-medium">{value}</div>
                                        </div>
                                    </MagicCard>
                                </a>
                            ))}
                        </BlurFade>

                        {/* Status Label */}
                        <BlurFade delay={0.35} inView>
                            <ShineBorder
                                color={["#8b5cf6", "#3b82f6", "#34d399"]}
                                borderWidth={1.5}
                                borderRadius={16}
                                duration={6}
                            >
                                <div className="p-5 bg-slate-950/95 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-green-400 text-sm font-semibold">Available for Work</span>
                                    </div>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        Open to full-time roles and freelance projects. Let's create something extraordinary!
                                    </p>
                                </div>
                            </ShineBorder>
                        </BlurFade>
                    </div>

                    {/* Right side: Form */}
                    <BlurFade delay={0.3} inView className="lg:col-span-3">
                        <div className="relative">
                            <MagicCard className="relative p-6" gradientColor="#8b5cf6" gradientOpacity={0.08}>
                                <BorderBeam colorFrom="#8b5cf6" colorTo="#3b82f6" size={200} />

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-500 text-xs mb-2 uppercase font-mono">Name</label>
                                            <div className="relative">
                                                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.name}
                                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                    placeholder="Your Name"
                                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-gray-200 focus:outline-none focus:border-violet-500/40 transition-all text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-gray-500 text-xs mb-2 uppercase font-mono">Email</label>
                                            <div className="relative">
                                                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                                                <input
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                    placeholder="your@email.com"
                                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-gray-200 focus:outline-none focus:border-violet-500/40 transition-all text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-500 text-xs mb-2 uppercase font-mono">Subject</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.subject}
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                            placeholder="What's this about?"
                                            className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-gray-200 focus:outline-none focus:border-violet-500/40 transition-all text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-500 text-xs mb-2 uppercase font-mono">Message</label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="Tell me about your project..."
                                            className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-gray-200 focus:outline-none focus:border-violet-500/40 transition-all resize-none text-sm"
                                        />
                                    </div>

                                    <ShimmerButton
                                        type="submit"
                                        disabled={status !== "idle"}
                                        background={
                                            status === "sent" ? "#059669" :
                                                status === "error" ? "#dc2626" :
                                                    "linear-gradient(135deg, #8b5cf6, #3b82f6)"
                                        }
                                        className="w-full py-3"
                                    >
                                        <span className="flex items-center justify-center gap-2 font-semibold">
                                            {status === "idle" && <><Send size={15} /> Send Message</>}
                                            {status === "sending" && <><Loader2 size={15} className="animate-spin" /> Sending...</>}
                                            {status === "sent" && <><CheckCircle size={15} /> Message Sent!</>}
                                            {status === "error" && <><AlertCircle size={15} /> Failed. Try again!</>}
                                        </span>
                                    </ShimmerButton>
                                </form>
                            </MagicCard>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}