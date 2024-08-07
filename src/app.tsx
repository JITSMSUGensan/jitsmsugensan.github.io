import { Theme, useTheme } from "./app/ThemeProvider";
import NavigationBar from "./components/NavigationBar";
import Inactive from "./pages/Inactive";
import Landing from "./pages/Landing";
import { useContext, useEffect, useRef } from "preact/hooks";
import Loading from "./pages/Loading";
import { createContext } from "preact";
import SizeDisplay from "./components/Debug/SizeDisplay";

export type IntervalArrayContextType = {
  intervals: number[];
  resetGridIntervals: () => void;
};

export function App() {
  // const { theme } = useTheme();

  const websiteIsInactive = true;
  const websiteInactivityTitle = "JITS WEBSITE";
  const websiteInactivitySubtitle = "Under Development...";

  if (websiteIsInactive)
    return (
      <>
        <Loading />
        <Inactive
          title={websiteInactivityTitle}
          subtitle={websiteInactivitySubtitle}
        />
      </>
    );

  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden bg-[#B6F0FF] dark:bg-[#010D10]">
        <div className="fixed size-full bg-cover dark:bg-[url('/background.png')]"></div>
        <Loading />
        <NavigationBar />
        <Landing />
      </div>
    </>
  );
}
