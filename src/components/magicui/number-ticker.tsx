import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { cn } from "../../lib/utils";

interface NumberTickerProps {
    value: number;
    className?: string;
    direction?: "up" | "down";
    delay?: number;
    decimalPlaces?: number;
}

export function NumberTicker({
    value,
    className,
    direction = "up",
    delay = 0,
    decimalPlaces = 0,
}: NumberTickerProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [current, setCurrent] = useState(direction === "down" ? value : 0);

    useEffect(() => {
        if (!isInView) return;

        const startTime = performance.now() + delay * 1000;
        const duration = 2000;
        const startValue = direction === "up" ? 0 : value;
        const endValue = direction === "up" ? value : 0;

        const animate = (now: number) => {
            if (now < startTime) {
                requestAnimationFrame(animate);
                return;
            }
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCurrent(startValue + (endValue - startValue) * eased);
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [isInView, value, direction, delay]);

    return (
        <span ref={ref} className={cn("inline-block tabular-nums", className)}>
            {current.toFixed(decimalPlaces)}
        </span>
    );
}
