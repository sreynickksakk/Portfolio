import { cn } from "../../lib/utils";

interface RetroGridProps {
    className?: string;
    angle?: number;
    opacity?: number;
}

export function RetroGrid({ className, angle = 65, opacity = 0.5 }: RetroGridProps) {
    return (
        <div
            className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
            style={{ "--grid-angle": `${angle}deg`, opacity } as React.CSSProperties}
        >
            <div className="absolute inset-[-200%]" style={{ transform: `perspective(300px) rotateX(var(--grid-angle))` }}>
                <div
                    className="animate-grid h-full w-full"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(139,92,246,0.2) 1px, transparent 0),
              linear-gradient(to bottom, rgba(139,92,246,0.2) 1px, transparent 0)
            `,
                        backgroundSize: "60px 60px",
                        backgroundRepeat: "repeat",
                    }}
                />
            </div>
            {/* Fade overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(8,8,16,0.8) 60%, #080810 100%)",
                }}
            />
            <style>{`
        @keyframes grid {
          0% { transform: translateY(0px); }
          100% { transform: translateY(60px); }
        }
        .animate-grid {
          animation: grid 4s linear infinite;
        }
      `}</style>
        </div>
    );
}
