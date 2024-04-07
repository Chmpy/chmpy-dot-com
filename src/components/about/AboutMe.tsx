"use client";
import {useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {TypewriterEffect} from "@/components/ui/typewriter-effect.tsx";
import WhoAmI from "./WhoAmI.tsx";
import CommandList from "./CommandList.tsx";
import EduList from "@/components/about/EduList.tsx";
import Experience from "@/components/about/Experience.tsx";
import Skills from "@/components/about/Skills.tsx";
import {ArrowLeftIcon} from "lucide-react";

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
        }, 1500);
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
                        className="pt-40 pb-28"
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
                    <WhoAmI key="whoami"/>
                )}
                {showCommand === "edu --list" && (
                    <EduList key="edu"/>
                )}
                {showCommand === "experience --recent" && (
                    <Experience key="experience"/>
                )}
                {showCommand === "skills --sorted" && (
                    <Skills key="skills"/>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showCommand !== "" && (
                    <motion.button
                        onClick={handleBackClick}
                        key="back"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        className="absolute bottom-28 left-1/2 transform -translate-x-1/2 inline-flex h-12 w-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span
                            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                        <span
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <ArrowLeftIcon className="h-5 w-5"/>
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}