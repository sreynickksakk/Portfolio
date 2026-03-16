import { cn } from "../../lib/utils";
import React from "react";

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    speed?: number;
}

export function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    speed = 40,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className
            )}
            style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn("flex shrink-0 justify-around gap-[--gap]", {
                            "animate-marquee-x flex-row": !vertical,
                            "animate-marquee-y flex-col": vertical,
                            "[animation-direction:reverse]": reverse,
                            "group-hover:[animation-play-state:paused]": pauseOnHover,
                        })}
                    >
                        {children}
                    </div>
                ))}
            <style>{`
        @keyframes marquee-x {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        @keyframes marquee-y {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% - var(--gap))); }
        }
        .animate-marquee-x {
          animation: marquee-x var(--duration) linear infinite;
        }
        .animate-marquee-y {
          animation: marquee-y var(--duration) linear infinite;
        }
      `}</style>
        </div>
    );
}
