import { useContext, useState } from "preact/hooks";
import { Theme } from "../../app/ThemeProvider";
import { createContext } from "preact";

export function NavigationButtons(props: any) {
  const handleClick = () => {
    console.log("Clicked:", props.children);
  };

  return (
    <li
      onClick={handleClick}
      className="flex max-h-[45px] cursor-pointer flex-row items-center border border-[#042926] px-4 py-1 transition-all hover:opacity-35 dark:border-white"
      {...props}
    >
      {props.children}
    </li>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useContext(Theme);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="relative h-[45px] w-[76px] cursor-pointer border border-[#042926] transition-all dark:border-white"
      onClick={handleThemeToggle}
    >
      <div className="relative left-1/2 top-1/2 h-[28px] w-[62px] -translate-x-1/2 -translate-y-1/2 border border-[#042926] bg-[#042926] transition-all dark:border-white dark:bg-[#9D9D9D]">
        <div className="absolute h-full w-1/2 translate-x-full bg-[#9D9D9D] transition-all dark:translate-x-0 dark:bg-[#CDFFFA]"></div>
      </div>
    </div>
  );
}

interface NavigationDropdownContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const NavigationDropdownContext =
  createContext<NavigationDropdownContextType>({
    open: false,
    setOpen: () => {},
  });

export function NavigationDropDown({
  children,
  ...props
}: {
  children: React.ReactNode;
  props?: any;
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <NavigationDropdownContext.Provider value={{ open, setOpen }}>
      <ul className="hidden flex-row md:flex">{children}</ul>
      <div
        className="relative z-[20] block border border-[#042926] p-3 text-[#042926] opacity-100 hover:opacity-50 active:opacity-80 dark:border-white dark:text-white md:hidden"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-6 w-6 transition-all ${open ? "rotate-90 opacity-100" : "rotate-0 opacity-0"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all ${open ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        onClick={handleOpen}
        className={`fixed left-0 top-0 z-[10] flex min-h-screen min-w-full pt-[calc(82px+42px)] transition-all md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"} flex-col bg-[#B6F0FF] dark:bg-[#010D10]`}
      >
        {children}
      </div>
    </NavigationDropdownContext.Provider>
  );
}

export default function NavigationBar() {
  return (
    <>
      <nav className="fixed z-[1000] flex h-[116px] w-full flex-row items-center bg-gradient-to-b from-[#B6F0FF] via-[#b6f0ffc1] via-[50%] to-transparent text-2xl transition-all dark:from-[#030D0F] dark:via-[#030D0F] dark:via-[20%]">
        <ul className="flex w-full flex-row justify-between px-[28px] text-black dark:text-white md:px-[62px]">
          <li className="z-[20] flex flex-row items-center">
            <p className="m-0 transition-all">JITS</p>
            <p className="m-0 text-[#04A898] transition-all dark:text-[#36DFCF]">
              ORG
            </p>
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
      <div className="h-[116px] bg-transparent transition-all"></div>
    </>
  );
}
