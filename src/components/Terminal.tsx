import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer.tsx";

interface TerminalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const Terminal: React.FC<TerminalProps> = ({ open, onOpenChange }) => {
    const [command, setCommand] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the submitted command and perform navigation logic
        console.log("Submitted command:", command);
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
                        <p>Enter a command to navigate through the website.</p>
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