"use client";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import {motion, AnimatePresence} from "framer-motion";
import React from "react";

export default function TypewriterTitle() {
    const words = [
        {
            text: "Roy",
        },
        {
            text: "Barneveld",
        },
    ];

    const [isCompleted, setIsCompleted] = React.useState(false);

    const handleComplete = () => {
        setIsCompleted(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-[10rem] ">
            <TypewriterEffect words={words} onCompleted={handleComplete}/>
            <AnimatePresence>
                {isCompleted && (
                    <>
                        <motion.div
                            initial={{x: -300, opacity: 0}} // Start from the left side
                            animate={{x: 0, opacity: 1}} // Move to the original position
                            exit={{x: 300, opacity: 0}} // Exit to the right side
                            transition={{duration: 1, type: "spring", stiffness: 50}} // Define the transition
                        >
                            Software Engineer
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}