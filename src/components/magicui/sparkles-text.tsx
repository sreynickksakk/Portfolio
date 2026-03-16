import { useEffect, useState, useRef, CSSProperties } from "react";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

interface Sparkle {
    id: string;
    x: string;
    y: string;
    color: string;
    delay: number;
    scale: number;
    lifespan: number;
}

function generateSparkle(colors: string[]): Sparkle {
    return {
        id: Math.random().toString(36).slice(2),
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        scale: Math.random() * 0.6 + 0.4,
        lifespan: Math.random() * 8 + 6,
    };
}

interface SparklesTextProps {
    children: string;
    className?: string;
    sparklesCount?: number;
    colors?: { first: string; second: string };
}

export function SparklesText({
    children,
    className,
    sparklesCount = 10,
    colors = { first: "#a78bfa", second: "#60a5fa" },
}: SparklesTextProps) {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const colorArr = [colors.first, colors.second];

    useEffect(() => {
        setSparkles(Array.from({ length: sparklesCount }, () => generateSparkle(colorArr)));
        const interval = setInterval(() => {
            setSparkles((prev) =>
                prev.map((s) =>
                    Math.random() > 0.7 ? generateSparkle(colorArr) : s
                )
            );
        }, 800);
        return () => clearInterval(interval);
    }, [sparklesCount]);

    return (
        <span className={cn("relative inline-block", className)}>
            {sparkles.map((sparkle) => (
                <motion.span
                    key={sparkle.id}
                    className="pointer-events-none absolute select-none"
                    style={{ left: sparkle.x, top: sparkle.y } as CSSProperties}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, sparkle.scale, 0] }}
                    transition={{ duration: sparkle.lifespan / 3, delay: sparkle.delay, repeat: Infinity, repeatDelay: sparkle.lifespan / 3 }}
                >
                    <svg width="10" height="10" viewBox="0 0 160 160">
                        <path
                            d="M80 0 C80 0, 72 72, 0 80 C72 80, 80 160, 80 160 C80 160, 88 88, 160 80 C88 80, 80 0, 80 0Z"
                            fill={sparkle.color}
                        />
                    </svg>
                </motion.span>
            ))}
            <strong className="relative font-inherit">{children}</strong>
        </span>
    );
}
