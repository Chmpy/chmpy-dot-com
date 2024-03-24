import {motion} from "framer-motion";
import {
    SiTypescript,
    SiReact,
    SiJavascript,
    SiMicrosoftsqlserver,
    SiMysql,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiCsharp,
    SiPython,
    SiNextdotjs,
    SiNodedotjs,
    SiSpring,
    SiBlazor,
    SiDotnet,
    SiAndroid,
    SiBootstrap,
    SiFirebase,
    SiKotlin,
    SiPostgresql,
    SiAmazonaws,
    SiMicrosoftazure, SiAstro
} from "react-icons/si";
import {DiJava} from "react-icons/di";

import {FaRobot} from "react-icons/fa";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip.tsx";

export default function Skills() {
    const icons = [
        // Frontend technologies
        <SiHtml5 title="HTML5" className="h-24 w-24 md:h-28 md:w-28  text-orange-500"/>,
        <SiCss3 title="CSS3" className="h-24 w-24 md:h-28 md:w-28  text-blue-600"/>,
        <SiJavascript title="JavaScript" className="h-24 w-24 md:h-28 md:w-28  text-yellow-500"/>,
        <SiTypescript title="TypeScript" className="h-24 w-24 md:h-28 md:w-28  text-blue-500"/>,
        <SiReact title="React" className="h-24 w-24 md:h-28 md:w-28  text-blue-500"/>,
        <SiNextdotjs title="Next.js" className="h-24 w-24 md:h-28 md:w-28  text-gray-700"/>,
        <SiAstro title="Astro" className="h-24 w-24 md:h-28 md:w-28  text-orange-500"/>,
        <SiBootstrap title="Bootstrap" className="h-24 w-24 md:h-28 md:w-28  text-purple-500"/>,
        <SiTailwindcss title="Tailwind" className="h-24 w-24 md:h-28 md:w-28  text-sky-500"/>,

        // Backend technologies
        <SiNodedotjs title="Node.js" className="h-24 w-24 md:h-28 md:w-28  text-green-600"/>,
        <SiSpring title="Spring" className="h-24 w-24 md:h-28 md:w-28  text-green-600"/>,
        <SiCsharp title="C#" className="h-24 w-24 md:h-28 md:w-28  text-purple-500"/>,
        <SiDotnet title=".NET" className="h-24 w-24 md:h-28 md:w-28  text-purple-500"/>,
        <SiBlazor title="Blazor" className="h-24 w-24 md:h-28 md:w-28  text-blue-500"/>,
        <SiPython title="Python" className="h-24 w-24 md:h-28 md:w-28  text-yellow-500"/>,
        <DiJava title="Java" className="h-24 w-24 md:h-28 md:w-28  text-red-500"/>,

        // Databases
        <SiMicrosoftsqlserver title="MSSQL" className="h-24 w-24 md:h-28 md:w-28  text-red-700"/>,
        <SiMysql title="MySQL" className="h-24 w-24 md:h-28 md:w-28  text-blue-800"/>,
        <SiMongodb title="MongoDB" className="h-24 w-24 md:h-28 md:w-28  text-green-600"/>,
        <SiPostgresql title="PostgreSQL" className="h-24 w-24 md:h-28 md:w-28  text-blue-600"/>,

        // Cloud services
        <SiFirebase title="Firebase" className="h-24 w-24 md:h-28 md:w-28  text-yellow-500"/>,
        <SiAmazonaws title="AWS" className="h-24 w-24 md:h-28 md:w-28  text-orange-600"/>,
        <SiMicrosoftazure title="Azure" className="h-24 w-24 md:h-28 md:w-28  text-blue-600"/>,

        // Other technologies
        <SiAndroid title="Android" className="h-24 w-24 md:h-28 md:w-28  text-green-600"/>,
        <SiKotlin title="Kotlin" className="h-24 w-24 md:h-28 md:w-28  text-purple-500"/>,
        <FaRobot title="AI/LLMs" className="h-24 w-24 md:h-28 md:w-28  text-gray-500"/>,
    ];

    return (
        <motion.div
            key="skills"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            transition={{delay: 0, duration: 0.5, ease: "easeInOut"}}
        >
            <div className="max-w-3xl mx-auto px-6 py-28 sm:px-8 lg:px-10">
                <div
                    className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 overflow-hidden py-8 px-2 sm:px-4 md:px-6">
                    <AnimatedTooltip icons={icons}/>
                </div>
            </div>
        </motion.div>
    );
}