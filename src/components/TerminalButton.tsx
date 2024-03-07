import {useState} from "react";
import {Terminal as TerminalIcon} from "lucide-react";
import Terminal from "./Terminal";

export default function TerminalButton() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    const handleTerminalToggle = () => {
        setIsTerminalOpen(!isTerminalOpen);
    };

    return (
        <>
            <button
                className="relative inline-flex h-12 w-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onClick={handleTerminalToggle}
            >
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                <span
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <div>
              <TerminalIcon/>
          </div>
        </span>
            </button>
            <Terminal open={isTerminalOpen} onOpenChange={setIsTerminalOpen}/>
        </>
    );
};