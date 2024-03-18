import { useContext } from "preact/hooks";
import { Theme } from "../../app/ThemeProvider";

export function NavigationButtons(props: any) {
    return (
        <li className="border border-[#042926] flex flex-row items-center dark:border-white py-1 px-4 hover:opacity-35 transition-all cursor-pointer max-h-[45px]" {...props}>{props.children}</li>
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

export default function NavigationBar() {

    return (
        <>
            <nav className="fixed z-[1000] w-full h-[125px] flex flex-row items-center from-[#B6F0FF] via-[#B6F0FF] via-[20%] dark:from-[#030D0F] dark:via-[#030D0F] via-[20%] to-transparent bg-gradient-to-b text-2xl transition-all">
                <ul className="flex flex-row justify-between w-full mx-[82px] dark:text-white text-black">
                    <li className="flex flex-row items-center">
                        <p className="m-0 transition-all">JITS</p><p className="m-0 text-[#04A898] dark:text-[#36DFCF] transition-all">ORG</p>
                    </li>
                    <li>
                        <ul className="flex flex-row">
                            <NavigationButtons>Home</NavigationButtons>
                            <NavigationButtons>Projects</NavigationButtons>
                            <NavigationButtons>Events</NavigationButtons>
                            <NavigationButtons>Blog</NavigationButtons>
                            <NavigationButtons>About</NavigationButtons>
                            <ThemeToggle />
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="h-[125px] bg-[#B6F0FF] dark:bg-[#030D0F] transition-all"></div>
        </>
    )
}