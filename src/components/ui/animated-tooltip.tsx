"use client";
import React, {useState} from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
                                    icons,
                                }: {
    icons: React.ReactElement[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = {stiffness: 100, damping: 5};
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    // Function to generate a random number between min and max
    const randomIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <>
            {icons.map((icon, idx) => (
                <motion.div
                    className="relative group flex items-center justify-center"
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{
                        opacity: 0,
                        x: randomIntFromInterval(-200, 200),
                        y: randomIntFromInterval(-200, 200)
                    }}
                    animate={{opacity: 1, x: 0, y: 0}}
                    exit={{
                        opacity: 0,
                        x: randomIntFromInterval(-200, 200),
                        y: randomIntFromInterval(-200, 200),
                        transition: {delay: idx * 0.005},
                    }}
                    transition={{type: "spring", stiffness: 260, damping: 10, delay: idx * 0.05}}
                >

                    <AnimatePresence mode="wait">
                        {hoveredIndex === idx && (
                            <motion.div
                                initial={{opacity: 0, y: 20, scale: 0.6}}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{opacity: 0, y: 20, scale: 0.6}}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-6 flex text-xs flex-col items-center justify-center rounded-md z-50 px-4 py-2"
                            >
                                <div className="font-bold relative z-30 text-base">
                                    {icon.props.title}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div
                        onMouseMove={handleMouseMove}
                        className="h-24 w-24 group-hover:scale-110 transition duration-500 flex items-center justify-center overflow-hidden"
                    >
                        {icon}
                    </div>
                </motion.div>
            ))}
        </>
    );
};