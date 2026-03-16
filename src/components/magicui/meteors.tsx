import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface MeteorProps {
    number?: number;
}

export function Meteors({ number = 20 }: MeteorProps) {
    const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

    useEffect(() => {
        const styles = Array.from({ length: number }, () => ({
            top: "-5%",
            left: `${Math.floor(Math.random() * 100)}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.floor(Math.random() * 8) + 4}s`,
            width: `${Math.floor(Math.random() * 150) + 60}px`,
        }));
        setMeteorStyles(styles);
    }, [number]);

    return (
        <>
            {meteorStyles.map((style, idx) => (
                <span
                    key={idx}
                    className={cn(
                        "animate-meteor pointer-events-none absolute h-px rotate-[215deg]",
                        "bg-gradient-to-r from-[#64748b] to-transparent",
                        "shadow-[0_0_0_1px_#ffffff05]"
                    )}
                    style={style}
                >
                    <span
                        className="absolute top-1/2 -z-10 h-[1px] w-[30px] -translate-y-1/2"
                        style={{
                            background: "linear-gradient(90deg, rgba(148,163,184,0.3), transparent)",
                        }}
                    />
                </span>
            ))}
            <style>{`
        @keyframes meteor {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
        }
        .animate-meteor {
          animation: meteor linear infinite;
        }
      `}</style>
        </>
    );
}
