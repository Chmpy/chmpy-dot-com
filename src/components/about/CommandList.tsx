import {motion} from "framer-motion";
import {Separator} from "@/components/ui/separator.tsx";

interface CommandListProps {
    onCommandClick: (command: string) => void;
}

export default function CommandList({onCommandClick}: CommandListProps) {
    const listVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
        exit: {opacity: 0, transition: {delay: 0.75}},
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -50},
    };

    return (
        <motion.ul
            key="list"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{delay: 0, staggerChildren: 0.5}}
            className="flex flex-col items-center justify-center min-h-full px-6 py-28 sm:px-8 lg:px-10"
        >
            {["whoami", "edu --list", "experience --recent", "skills --top"].map(
                (command, index) => (
                    <motion.li
                        key={command}
                        variants={itemVariants}
                        transition={{delay: index * 0.3}}
                        className="cursor-pointer font-mono w-full text-xl md:text-2xl hover:text-violet-500 transition-colors duration-300 ease-in-out"
                        onClick={() => onCommandClick(command)}
                    >
                        {command}
                        {index !== 3 && (
                            <Separator className="my-8 w-full"/>
                        )}
                    </motion.li>
                )
            )}
        </motion.ul>
    );
}