import { useContext, useState } from "preact/hooks";
import { Theme } from "../../app/ThemeProvider";
import { createContext } from "preact";

export function NavigationButtons(props: any) {
    const handleClick = () => {
        console.log("Clicked:", props.children);
    }

    return (
        <li onClick={handleClick} className="border border-[#042926] flex flex-row items-center dark:border-white py-1 px-4 hover:opacity-35 transition-all cursor-pointer max-h-[45px]" {...props}>{props.children}</li>
    )
}

export function ThemeToggle() {
    const { theme, setTheme } = useContext(Theme);

    const handleThemeToggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className="relative h-[45px] w-[76px] border border-[#042926] dark:border-white transition-all cursor-pointer" onClick={handleThemeToggle}>
            <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[28px] w-[62px] bg-[#042926] dark:bg-[#9D9D9D] border border-[#042926] dark:border-white transition-all">
                <div className="absolute h-full w-1/2 bg-[#9D9D9D] dark:bg-[#CDFFFA] translate-x-full dark:translate-x-0 transition-all"></div>
            </div>
        </div>
    )
}

interface NavigationDropdownContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const NavigationDropdownContext = createContext<NavigationDropdownContextType>({
    open: false,
    setOpen: () => {}
});

export function NavigationDropDown({ children, ...props} : { children: React.ReactNode, props?: any }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <NavigationDropdownContext.Provider value={{open, setOpen}}>
            <ul className="hidden md:flex flex-row">
                { children }
            </ul>
            <div className="z-[20] relative block md:hidden border border-[#042926] dark:border-white p-3 opacity-100 hover:opacity-50 active:opacity-80 text-[#042926] dark:text-white" onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` w-6 h-6 transition-all ${open ? "rotate-90 opacity-100" : "rotate-0 opacity-0"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 transition-all ${open ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}>
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            </div>
            <div onClick={handleOpen} className={`z-[10] pt-[calc(82px+42px)] fixed top-0 left-0 min-h-screen min-w-full flex md:hidden transition-all ${open ? "opacity-100" : "opacity-0 pointer-events-none"} flex-col bg-[#B6F0FF] dark:bg-[#010D10]`}>
                { children }
            </div>
        </NavigationDropdownContext.Provider>
    );
}

export default function NavigationBar() {

    return (
        <>
            <nav className="fixed z-[1000] w-full h-[125px] flex flex-row items-center from-[#B6F0FF] via-[#b6f0ffc1] via-[50%] dark:from-[#030D0F] dark:via-[#030D0F] dark:via-[20%] to-transparent bg-gradient-to-b text-2xl transition-all">
                <ul className="flex flex-row justify-between w-full mx-[28px] md:mx-[82px] dark:text-white text-black">
                    <li className="z-[20] flex flex-row items-center">
                        <p className="m-0 transition-all">JITS</p><p className="m-0 text-[#04A898] dark:text-[#36DFCF] transition-all">ORG</p>
                    </li>
                    <li>
                        <NavigationDropDown>
                            <NavigationButtons>Home</NavigationButtons>
                            <NavigationButtons>Projects</NavigationButtons>
                            <NavigationButtons>Events</NavigationButtons>
                            <NavigationButtons>Blog</NavigationButtons>
                            <NavigationButtons>About</NavigationButtons>
                            <ThemeToggle />
                        </NavigationDropDown>
                    </li>
                </ul>
            </nav>
            <div className="h-[125px] bg-[#B6F0FF] dark:bg-[#030D0F] transition-all"></div>
        </>
    )
}