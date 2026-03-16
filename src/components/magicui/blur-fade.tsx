"use client"

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "../../lib/utils";

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    variant?: Variants;
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: string;
    blur?: string;
}

export function BlurFade({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inView = false,
    inViewMargin = "-50px",
    blur = "6px",
}: BlurFadeProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: inViewMargin as any
    });

    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: delay,
                duration: duration,
                ease: [0.21, 0.47, 0.32, 0.98],
            },
        },
    };

    const combinedVariants = variant || defaultVariants;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={combinedVariants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
