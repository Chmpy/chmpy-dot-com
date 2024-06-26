import React, {useState} from "react";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/components/ui/drawer.tsx";

interface TerminalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const Terminal: React.FC<TerminalProps> = ({open, onOpenChange}) => {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState<React.ReactNode>(" ");

    const pages = ["home", "about", "contact"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const [cmd, arg] = command.trim().split(" ");

        switch (cmd.toLowerCase()) {
            case "ls":
                setOutput((() => (
                    <nav className="flex space-x-6">
                        {pages.map((page) => (
                            <a key={page} href={`/${page}`} className="underline">{page}</a>
                        ))}
                    </nav>
                )));
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
                setOutput(" ");
                break;
            case "clear":
                setOutput("");
                break;
            default:
                setOutput("Invalid command. Available commands: ls, cd, help, clear");
        }

        setCommand("");
    };

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="h-[calc(100vh-8rem)]">
                <DrawerHeader>
                    <DrawerTitle>Terminal</DrawerTitle>
                </DrawerHeader>
                <div className="h-full p-4 rounded-md flex flex-col mb-4">
                    <div>
                        {output == " " && (
                            <><p>Welcome to the terminal!</p><p>
                                Available commands: <br/>
                                ls - Lists available pages <br/>
                                cd &lt;page&gt; - Navigates to a specified page <br/>
                                help - Displays this help message <br/>
                                clear - Clears the terminal
                            </p></>
                        )}
                    </div>
                    <div className="mb-4">
                        {output}
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