import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
    startOnView?: boolean;
}

export function TypingAnimation({
    text,
    duration = 80,
    className,
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [i, setI] = useState<number>(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                setI((prev) => prev + 1);
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => clearInterval(typingEffect);
    }, [duration, i, text]);

    return (
        <span className={cn("inline-block", className)}>
            {displayedText ? displayedText : ""}
            <span className="animate-pulse">|</span>
        </span>
    );
}
