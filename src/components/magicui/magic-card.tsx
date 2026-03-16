import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface MagicCardProps {
    children: React.ReactNode;
    className?: string;
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
    gradientFrom?: string;
    gradientTo?: string;
}

export function MagicCard({
    children,
    className,
    gradientSize = 200,
    gradientColor = "#8b5cf6",
    gradientOpacity = 0.12,
}: MagicCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [gradientPosition, setGradientPosition] = useState({ x: -gradientSize, y: -gradientSize });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!cardRef.current) return;
            const { left, top } = cardRef.current.getBoundingClientRect();
            setGradientPosition({ x: e.clientX - left, y: e.clientY - top });
        },
        []
    );

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        card.addEventListener("mousemove", handleMouseMove);
        return () => card.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300",
                isHovered && "border-white/[0.12] shadow-2xl shadow-violet-500/5",
                className
            )}
        >
            {/* Mouse follower gradient */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(${gradientSize}px circle at ${gradientPosition.x}px ${gradientPosition.y}px, ${gradientColor}${Math.round(gradientOpacity * 255).toString(16).padStart(2, "0")}, transparent 60%)`,
                }}
            />
            {/* Noise texture for depth */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
            {children}
        </div>
    );
}
