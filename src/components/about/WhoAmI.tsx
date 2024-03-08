import {motion} from "framer-motion";
import {ArrowLeftIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";

interface WhoAmIProps {
    onBackClick: () => void;
}

export default function WhoAmI({onBackClick}: WhoAmIProps) {
    return (
        <motion.div
            key="whoami"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 0}}
            transition={{delay: 0, duration: 0.5, ease: "easeInOut"}}
        >
            <div className="max-w-xl mx-auto px-6 py-28 sm:px-8 lg:px-10">
                <p className="mb-6 text-sm md:text-base">
                    I am a 21-year-old software engineering student from Belgium, on the brink of graduation and open to
                    opportunities worldwide. My journey in software development is driven by an unyielding passion for
                    tackling new challenges and expanding my skill set, which spans across full-stack, mobile, and web
                    application development.
                </p>

                <Separator/>

                <blockquote className="text-lg sm:text-xl lg:text-2xl font-bold my-8 text-violet-500">
                    "Knowledge is power." – Francis Bacon
                </blockquote>

                <Separator/>

                <p className=" text-sm md:text-base my-6">
                    Embracing this adage, I am deeply committed to excellence and continuous improvement in the
                    ever-evolving tech landscape. Renowned for my quick learning abilities, I effortlessly adapt to new
                    technologies and programming languages, ensuring that I am always at the forefront of industry
                    advancements. My collaborative spirit and enthusiasm for collective success make me an ideal
                    teammate
                    for projects that seek to innovate and push boundaries.
                </p>

                <p className="text-sm md:text-base">
                    If you're in search of a motivated and dedicated software developer who prioritizes high-quality
                    solutions and embraces challenges as opportunities for growth, your search ends with me. I am eager
                    to
                    contribute my skills and fresh perspectives to your team, helping to achieve collective goals and
                    drive
                    forward societal and business advancements with cutting-edge software solutions. Let's embark on
                    this
                    transformative journey together.
                </p>
            </div>
            <button
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 inline-flex h-12 w-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onClick={onBackClick}
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