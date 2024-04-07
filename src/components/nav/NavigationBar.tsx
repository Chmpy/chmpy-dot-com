import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Separator} from "@/components/ui/separator.tsx";
import {cn} from "@/lib/utils.ts";

export default function NavigationBar({animationDirection = 1}) {
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        // Get the current page from the URL
        const currentPath = window.location.pathname;
        const currentPage = navLinks.find(link => link.path === currentPath)?.label || 'Home';
        setCurrentPage(currentPage);
    }, []);

    const navItemVariants = {
        hidden: {y: animationDirection > 0 ? '-100%' : '100%', opacity: 0},
        visible: {y: 0, opacity: 1},
        exit: {y: animationDirection > 0 ? '100%' : '-100%', opacity: 0},
    };

    const navLinks = [
        {label: 'Home', path: '/'},
        {label: 'About', path: '/about'},
        {label: 'Contact', path: '/contact'},
    ];

    return (
        <nav className="min-w-80 flex flex-col justify-center">
            <Separator className="w-full my-3"/>
            <motion.ul
                variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1},
                    exit: {opacity: 0},
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{staggerChildren: 0.3}}
                className="flex flex-row justify-around font-mono"
            >
                {navLinks.map((link, index) => (
                    <motion.li
                        key={index}
                        variants={navItemVariants}
                        className={cn(
                            "cursor-pointer transition-colors duration-300 ease-in-out px-4 w-1/3",
                            currentPage === link.label
                                ? "text-violet-500 hover:text-violet-700"
                                : "hover:text-violet-500"
                        )}
                    >
                        <div className="flex justify-center items-center">
                            {currentPage === link.label && (
                                <motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.8, repeat: Infinity, repeatType: "reverse"}}
                                    className="inline-block rounded-sm w-[3px] h-4 bg-black dark:bg-white -translate-x-2.5"
                                ></motion.span>
                            )}
                            <a href={link.path}>{link.label}</a>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
            <Separator className="w-full my-3"/>
        </nav>
    );
}