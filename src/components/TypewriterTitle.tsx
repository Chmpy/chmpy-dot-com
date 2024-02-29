"use client";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";

export default function TypewriterTitle() {
    const words = [
        {
            text: "Roy",
        },
        {
            text: "Barneveld",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[4rem] ">
            <TypewriterEffect words={words}/>
        </div>
    );
}