import { cn } from "../../lib/utils";
import React from "react";

interface AnimatedGradientTextProps {
    children: React.ReactNode;
    className?: string;
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
    return (
        <div
            className={cn(
                "group relative mx-auto flex max-w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8b5cf622]",
                className
            )}
        >
            <div
                className="absolute inset-0 block rounded-full"
                style={{
                    background:
                        "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4, #34d399, #8b5cf6) 0% 0% / 300% 100%",
                    animation: "gradient-shift 4s linear infinite",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                    padding: "1px",
                }}
            />
            <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer-slide {
          to { transform: translate(calc(100cqi + 1px)) }
        }
      `}</style>
            <span
                className="inline animate-background-shine bg-gradient-to-r from-violet-300 via-blue-300 to-teal-300 bg-[length:200%_auto] bg-clip-text text-transparent"
                style={{
                    animation: "gradient-shift 3s linear infinite",
                    background:
                        "linear-gradient(90deg, #c4b5fd, #93c5fd, #6ee7b7, #c4b5fd) 0% 0% / 300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}
            >
                {children}
            </span>
        </div>
    );
}