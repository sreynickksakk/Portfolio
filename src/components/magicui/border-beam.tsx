import { cn } from "../../lib/utils";

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    delay?: number;
    colorFrom?: string;
    colorTo?: string;
    borderWidth?: number;
}

export function BorderBeam({
    className,
    size = 200,
    duration = 10,
    delay = 0,
    colorFrom = "#8b5cf6",
    colorTo = "#3b82f6",
    borderWidth = 1.5,
}: BorderBeamProps) {
    return (
        <div
            className={cn("pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden", className)}
            style={{ "--size": size, "--duration": duration, "--delay": delay } as React.CSSProperties}
        >
            <div
                className="absolute inset-0"
                style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 120deg, transparent 180deg) 0 0 / 100% 100%`,
                    animation: `border-beam-spin ${duration}s linear infinite`,
                    animationDelay: `${delay}s`,
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                    padding: `${borderWidth}px`,
                    borderRadius: "inherit",
                }}
            />
            <style>{`
        @keyframes border-beam-spin {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }
      `}</style>
        </div>
    );
}
