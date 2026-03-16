import { cn } from "../../lib/utils";

interface ShineBorderProps {
    children: React.ReactNode;
    className?: string;
    color?: string | string[];
    borderWidth?: number;
    duration?: number;
    borderRadius?: number;
}

export function ShineBorder({
    children,
    className,
    color = ["#8b5cf6", "#3b82f6", "#06b6d4"],
    borderWidth = 1,
    duration = 8,
    borderRadius = 16,
}: ShineBorderProps) {
    const colorStr = Array.isArray(color) ? color.join(", ") : color;

    return (
        <div
            className={cn("relative p-[1px] overflow-hidden", className)}
            style={{ borderRadius }}
        >
            {/* Shining border */}
            <div
                className="absolute inset-0"
                style={{
                    borderRadius,
                    padding: borderWidth,
                    background: `conic-gradient(from var(--angle, 0deg), ${colorStr}, transparent 60%)`,
                    animation: `shine-border-spin ${duration}s linear infinite`,
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                }}
            />
            <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes shine-border-spin {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }
      `}</style>
            <div className="relative z-10" style={{ borderRadius: borderRadius - borderWidth }}>
                {children}
            </div>
        </div>
    );
}
