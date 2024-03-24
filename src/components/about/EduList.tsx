import {motion} from "framer-motion";

export default function EduList() {
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
        </motion.div>
    );
}

