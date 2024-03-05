import * as React from "react";
import {motion} from 'framer-motion';
import InkSplashEffect from "@/components/ui/ink-component.tsx";

// Define variants for animations
const svgVariants = {
    hidden: {
        scale: 0.2,
        opacity: 0.05,
    },
    visible: {
        scale: [0.2, 2, 1],
        opacity: 0.60,
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.5}
    }
};

// Define transition settings
const transitionSettings = {
    duration: 0.1,
    delay: 1.5,
};

const AnimatedInkSplashEffect = (props) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={svgVariants}
            transition={transitionSettings}
            {...props}
        >
            <InkSplashEffect/>
        </motion.div>
    );
};

//TODO: Change one svg to a lot of small ones to create a better splash effect with more sudden drops. These will be used throughout the site.

export default AnimatedInkSplashEffect;
