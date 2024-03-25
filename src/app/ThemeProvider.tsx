import { createContext } from "preact";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";

type ThemeProviderProps = {
    initialTheme: string;
    children: React.ReactNode | React.ReactNode[] | undefined;
}

type ThemeContext = {
    theme: string;
    setTheme: (theme: string) => void;
}

export const Theme = createContext<ThemeContext>({ theme: '', setTheme: () => { } });

export const useTheme = () => useContext(Theme);

export default function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || initialTheme || "light");
    const themeControl = useMemo(() => { return { theme, setTheme } }, [theme]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    return (
        <Theme.Provider value={themeControl}>
            {children}
        </Theme.Provider>
    )
}