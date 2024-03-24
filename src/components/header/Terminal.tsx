import React, {useState} from "react";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/components/ui/drawer.tsx";

interface TerminalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const Terminal: React.FC<TerminalProps> = ({open, onOpenChange}) => {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState("");

    const pages = ["home", "about", "contact"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const [cmd, arg] = command.trim().split(" ");

        switch (cmd.toLowerCase()) {
            case "ls":
                setOutput(pages.join(" "));
                break;
            case "cd":
                if (!arg) {
                    setOutput("Please specify a destination from the available pages.");
                } else if (pages.includes(arg.toLowerCase())) {
                    window.location.href = `/${arg.toLowerCase()}`;
                } else {
                    setOutput("Destination doesn't exist. Please choose from the available pages.");
                }
                break;
            default:
                setOutput("Invalid command. Available commands: ls, cd");
        }

        setCommand("");
    };

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Terminal</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 rounded-md">
                    <div className="mb-4">
                        <p>Welcome to the terminal!</p>
                        <p>Enter 'ls' to see available pages or 'cd &lt;page&gt; ' to navigate.</p>
                    </div>
                    <div className="mb-4">
                        <pre className="text-wrap">{output}</pre>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <span className="mr-2">$</span>
                            <input
                                type="text"
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                className="bg-transparent focus:outline-none flex-1"
                                placeholder="Enter a command..."
                            />
                        </div>
                    </form>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default Terminal;