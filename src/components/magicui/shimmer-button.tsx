import { cn } from "../../lib/utils";
import React, { CSSProperties } from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            shimmerColor = "#ffffff",
            shimmerSize = "0.05em",
            shimmerDuration = "3s",
            borderRadius = "100px",
            background = "rgba(0, 0, 0, 1)",
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                style={
                    {
                        "--shimmer-color": shimmerColor,
                        "--radius": borderRadius,
                        "--speed": shimmerDuration,
                        "--cut": shimmerSize,
                        "--bg": background,
                    } as CSSProperties
                }
                className={cn(
                    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white",
                    "[background:var(--bg)] [border-radius:var(--radius)]",
                    "transform-gpu transition-transform duration-300 ease-in-out active:scale-95",
                    className
                )}
                {...props}
            >
                {/* Shimmer overlay */}
                <div
                    className={cn(
                        "absolute inset-0 overflow-hidden [border-radius:var(--radius)]"
                    )}
                >
                    <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
                        style={{
                            background: `conic-gradient(from 0deg, transparent 0 340deg, var(--shimmer-color) 360deg)`,
                        }}
                    />
                </div>
                {/* Inner background */}
                <div
                    className="absolute inset-[1px] [border-radius:calc(var(--radius)-1px)]"
                    style={{ background: "var(--bg)" }}
                />
                {/* Sparkle */}
                <div
                    className="absolute inset-0 [border-radius:var(--radius)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                    }}
                />
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </button>
        );
    }
);

ShimmerButton.displayName = "ShimmerButton";
