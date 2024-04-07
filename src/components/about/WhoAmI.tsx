import {motion} from "framer-motion";
import {Separator} from "@/components/ui/separator.tsx";

export default function WhoAmI() {
    return (
        <motion.div
            key="whoami"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            transition={{delay: 0, duration: 0.5, ease: "easeInOut"}}
        >
            <div className="max-w-xl mx-auto px-6 py-28">
                <div className="pt-8 pb-12">
                    <p className="mb-6 text-sm md:text-base">
                        I am a 21-year-old software engineering student from Belgium, on the brink of graduation and
                        open to
                        opportunities worldwide. My journey in software development is driven by an unyielding passion
                        for
                        tackling new challenges and expanding my skill set, which spans across full-stack, mobile, and
                        web
                        application development, as well as algorithms and artificial intelligence.
                    </p>

                    <Separator/>

                    <blockquote className="text-lg sm:text-xl font-bold my-8 text-violet-500">
                        "Knowledge is power." – Francis Bacon
                    </blockquote>

                    <Separator/>

                    <p className=" text-sm md:text-base my-6">
                        Embracing this adage, I am deeply committed to excellence and continuous improvement in the
                        ever-evolving tech landscape. Renowned for my quick learning abilities, I effortlessly adapt to
                        new
                        technologies and programming languages, ensuring that I am always at the forefront of industry
                        advancements. My collaborative spirit and enthusiasm for collective success make me an ideal
                        teammate for projects that seek to innovate and push boundaries.
                    </p>

                    <p className="text-sm md:text-base">
                        If you're in search of a motivated and dedicated software developer who prioritizes high-quality
                        solutions and embraces challenges as opportunities for growth, let's embark on this
                        transformative
                        journey together. I am eager to contribute my skills and fresh perspectives to your team,
                        helping to
                        achieve collective goals and drive forward societal and business advancements with cutting-edge
                        software solutions.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}