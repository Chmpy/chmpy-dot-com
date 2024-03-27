import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {CiCircleCheck, CiCircleAlert} from "react-icons/ci";

interface NotificationPopupProps {
    isOpen: boolean;
    isSuccess: boolean;
    onClose: () => void;
}

export default function NotificationPopup({isOpen, isSuccess, onClose}: NotificationPopupProps) {
    const animationVariants = {
        initial: {scale: 0.5, opacity: 0},
        animate: {scale: 1, opacity: 1},
        exit: {scale: 0.5, opacity: 0},
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={`fixed inset-0 z-50 flex items-center justify-center h-screen w-screen`}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={animationVariants}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                >
                    <div className="absolute inset-0" onClick={onClose}/>
                    <motion.div
                        className="relative w-full max-w-sm rounded-lg border backdrop-blur-md p-8 shadow-lg"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2, delay: 0.1}}
                    >
                        <div className="flex flex-col items-center justify-center">
                            {isSuccess ? (
                                <CiCircleCheck className="h-16 w-16 text-green-500"/>
                            ) : (
                                <CiCircleAlert className="h-16 w-16 text-red-500"/>
                            )}
                            <h3 className="mt-4 text-center text-lg">
                                {isSuccess ? 'Message sent successfully' : 'Failed to send message'}
                            </h3>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};