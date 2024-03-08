"use client";
import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {TypewriterEffect} from "@/components/ui/typewriter-effect.tsx";
import {Separator} from "@/components/ui/separator.tsx";

export default function AboutMe() {
    const words = [
        {text: "About"},
        {text: "Me", className: "text-violet-500"},
    ];

    const [showTypewriter, setShowTypewriter] = useState(true);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTypewriter(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const handleTypewriterExit = () => {
        setShowList(true);
    };

    const handleClick = (command: string) => {
        // Handle the click event for each command
        console.log(`Clicked: ${command}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <AnimatePresence onExitComplete={handleTypewriterExit}>
                {showTypewriter && (
                    <motion.div
                        key="typewriter"
                        initial={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <TypewriterEffect words={words}/>
                    </motion.div>
                )}
            </AnimatePresence>

            {showList && (
                <motion.ul
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0, staggerChildren: 0.5}}
                    className="flex flex-col items-center justify-center min-h-screen"
                >
                    {["whoami", "edu --list", "experience --recent", "skills --top"].map(
                        (command, index) => (
                            <motion.li
                                key={command}
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.3}}
                                className="cursor-pointer font-mono w-full text-lg sm:text-xl lg:text-2xl  hover:text-violet-500 transition-colors duration-300 ease-in-out"
                                onClick={() => handleClick(command)}
                            >
                                {command}
                                {index !== 3 && (
                                    <Separator className="my-4 sm:my-6 lg:my-8 w-full"/>
                                )}
                            </motion.li>
                        )
                    )}
                </motion.ul>

            )}
        </div>
    );
}