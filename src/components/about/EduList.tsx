import {motion} from "framer-motion";
import {ArrowLeftIcon} from "lucide-react";

interface EduListProps {
    onBackClick: () => void;
}

export default function EduList({onBackClick}: EduListProps) {
    return (
        <motion.div
            key="edu"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            transition={{delay: 0, duration: 0.5, ease: "easeInOut"}}
        >
            <div className="max-w-xl mx-auto px-6 py-28 sm:px-8 lg:px-10">
                <div className="py-8">
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                    <div className="mt-4">
                        <h4 className="text-lg font-bold">Bachelor of Science in Applied Computer Science</h4>
                        <p className="text-gray-600">Ghent University of Applied Sciences and Arts <br/>Feb 2021 - Jun
                            2024</p>
                        <p className="mt-2">Specialisation: Mobile & Enterprise developer</p>
                    </div>
                </div>
            </div>
            <button
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 inline-flex h-12 w-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onClick={
                    onBackClick
                }
            >
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                <span
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <ArrowLeftIcon className="h-5 w-5"/>
                </span>
            </button>
        </motion.div>
    );
}

