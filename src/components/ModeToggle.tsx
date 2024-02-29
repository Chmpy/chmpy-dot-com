import * as React from "react"
import {Switch} from "@/components/ui/switch.tsx";

export default function ModeToggle() {
    const [theme, setThemeState] = React.useState<
        "theme-light" | "dark" | "system"
    >("theme-light")

    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark")
        setThemeState(isDarkMode ? "dark" : "theme-light")
        setChecked(isDarkMode);
    }, [])

    React.useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList[isDark ? "add" : "remove"]("dark")
    }, [theme])

    return (
        <Switch
            checked={checked}
            onCheckedChange={checked => {
                setChecked(checked);
                setThemeState(checked ? "dark" : "theme-light");
            }}
        >
        </Switch>
    )
}