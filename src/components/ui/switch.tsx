import * as React from "react"
import {Moon, Sun} from "lucide-react"
import {useSpring, animated} from 'react-spring'

export const Switch = ({checked, onCheckedChange}) => {
    const {opacity} = useSpring({
        opacity: checked ? 1 : 0,
    });

    return (
        <button className="flex justify-center items-center p-6 border-2 rounded-xl" onClick={() => onCheckedChange(!checked)}>
            <animated.div style={{opacity: opacity.to(o => 1 - o), position: 'absolute'}}>
                <Sun/>
            </animated.div>
            <animated.div style={{opacity, position: 'absolute'}}>
                <Moon/>
            </animated.div>
        </button>
    )
}