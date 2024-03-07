import * as React from "react"
import {Moon, Sun} from "lucide-react"
import {useSpring, animated} from 'react-spring'

export const ThemeSwitch = ({checked, onCheckedChange}) => {
    const {opacity} = useSpring({
        opacity: checked ? 1 : 0,
    });

    return (
        <button
            className="relative inline-flex h-12 w-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={() => onCheckedChange(!checked)}>
        <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
            <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <animated.div style={{opacity: opacity.to(o => 1 - o), position: 'absolute'}}>
                <Sun/>
            </animated.div>
            <animated.div style={{opacity, position: 'absolute'}}>
                <Moon/>
            </animated.div>
        </span>
        </button>
    )
}