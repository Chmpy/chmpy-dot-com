import TypewriterTitle from "@/components/TypewriterTitle";
import {motion} from "framer-motion";
import Particles from "react-tsparticles";

export default function Hero() {
    return (
        <div className="relative flex flex-col items-center justify-center h-[10rem]">
            <TypewriterTitle/>
        </div>
    );
}