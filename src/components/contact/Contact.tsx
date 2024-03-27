"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect.tsx";
import ContactForm from "@/components/contact/ContactForm.tsx";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Ensure these are imported at the top

export default function ContactPage() {
    const words = [
        { text: "Contact" },
        { text: "Me", className: "text-violet-500" },
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
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TypewriterEffect words={words} />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ContactForm />
                        <div className="mt-8 text-center">
                            <p>Find me on:</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a
                                    href="https://github.com/chmpy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition duration-300 hover:scale-110"
                                >
                                    <span className="sr-only">GitHub</span>
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/roybarneveld"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition duration-300 hover:scale-110"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
