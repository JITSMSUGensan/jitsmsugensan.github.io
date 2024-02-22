import { useContext } from "preact/hooks";
import { Theme } from "../../app/ThemeProvider";



export default function NavigationBar() {
    const { theme, setTheme } = useContext(Theme);

    const handleThemeToggle = () => { 
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <nav className="fixed w-full h-[125px] flex flex-row items-center dark:bg-black bg-white">
            <ul className="flex flex-row justify-between w-full mx-[82px] dark:text-white text-black">
                <li className="flex flex-row">
                    <p className="m-0">JITS</p><p className="m-0">ORG</p>
                </li>
                <li>
                    <ul className="flex flex-row space-x-4">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>About</li>
                        <button className="dark:text-white text-black" onClick={handleThemeToggle}>{ theme }</button>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}