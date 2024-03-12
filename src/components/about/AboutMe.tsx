"use client";
import {useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {TypewriterEffect} from "@/components/ui/typewriter-effect.tsx";
import WhoAmI from "./WhoAmI.tsx";
import CommandList from "./CommandList.tsx";
import EduList from "@/components/about/EduList.tsx";

export default function AboutMe() {
    const words = [
        {text: "About"},
        {text: "Me", className: "text-violet-500"},
    ];

    const [showTypewriter, setShowTypewriter] = useState(true);
    const [showList, setShowList] = useState(false);
    const [showCommand, setShowCommand] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTypewriter(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleTypewriterExit = () => {
        setShowList(true);
    };

    const handleCommandClick = (command: string) => {
        setShowList(false);
        setTimeout(() => {
            setShowCommand(command);
        } , 1500);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    const handleBackClick = () => {
        setTimeout(() => {
            setShowList(true);
        }, 500);
        setShowCommand("");
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-full">
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

            <AnimatePresence>
                {showList && (
                    <CommandList key="list" onCommandClick={handleCommandClick}/>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showCommand === "whoami" && (
                    <WhoAmI key="whoami" onBackClick={handleBackClick}/>
                )}
                {showCommand === "edu --list" && (
                   <EduList key="edu" onBackClick={handleBackClick}/>
                )}
            </AnimatePresence>
        </div>
    );
}