import { motion, Variants } from "motion/react";
import { cn } from "../../lib/utils";

interface WordFadeInProps {
    words: string;
    className?: string;
    delay?: number;
    variants?: Variants;
}

export function WordFadeIn({ words, className, delay = 0.15, variants }: WordFadeInProps) {
    const defaultVariants: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * delay },
        }),
    };

    const combinedVariants = variants || defaultVariants;
    const _words = words.split(" ");

    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            className={cn("font-display text-center tracking-[-0.02em] drop-shadow-sm", className)}
        >
            {_words.map((word, i) => (
                <motion.span key={word + i} variants={combinedVariants} custom={i} className="inline-block mr-[0.25em]">
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
}
