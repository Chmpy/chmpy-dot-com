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
            case "help":
                setOutput("");
                break;
            default:
                setOutput("Invalid command. Available commands: ls, cd, help");
        }

        setCommand("");
    };

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="h-[calc(100vh-8rem)]">
                <DrawerHeader>
                    <DrawerTitle>Terminal</DrawerTitle>
                </DrawerHeader>
                <div className="h-full p-4 rounded-md flex flex-col justify-between mb-4">
                    <div>
                        <div className="mb-4">
                            {!output && (
                                <><p>Welcome to the terminal!</p><p>
                                    Available commands: <br/>
                                    ls - Lists available pages <br/>
                                    cd &lt;page&gt; - Navigates to a specified page <br/>
                                    help - Displays this help message
                                </p></>
                            )}
                        </div>
                        <div className="mb-4">
                            <pre className="text-wrap">{output}</pre>
                        </div>
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