import TypewriterTitle from "@/components/TypewriterTitle";
import AnimatedInkSplashEffect from "@/components/AnimatedInkSplashEffect.tsx";


export default function Hero() {
    return (
        <div className="relative flex flex-col items-center justify-center h-[10rem]">
            <AnimatedInkSplashEffect className="absolute -z-10 w-full h-full flex items-center justify-center"/>
            <TypewriterTitle/>
        </div>
    );
}