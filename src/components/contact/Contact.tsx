"use client";
import {useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {TypewriterEffect} from "@/components/ui/typewriter-effect.tsx";
import ContactForm from "@/components/contact/ContactForm.tsx";

export default function ContactPage() {
    const words = [
        {text: "Contact"},
        {text: "Me", className: "text-violet-500"}
    ];

    const [showTypewriter, setShowTypewriter] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTypewriter(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleTypewriterExit = () => {
        setShowForm(true);
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
                {showForm && (
                    <motion.div
                        key="form"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <ContactForm/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};