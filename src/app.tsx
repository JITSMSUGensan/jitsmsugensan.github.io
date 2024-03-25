import { Theme, useTheme } from "./app/ThemeProvider";
import NavigationBar from "./components/NavigationBar";
import Inactive from "./pages/Inactive";
import Landing from "./pages/Landing";
import { useContext, useEffect } from "preact/hooks";
import Loading from "./pages/Loading";

export function App() {
  const { theme } = useTheme();

  const websiteIsInactive = false;
  const websiteInactivityTitle = "JITS WEBSITE";
  const websiteInactivitySubtitle = "Under Development...";

  if (websiteIsInactive) return <><Loading /><Inactive title={websiteInactivityTitle} subtitle={websiteInactivitySubtitle} /></>;

  return (
    <div className="bg-[#B6F0FF] dark:bg-[#010D10]">
      <div className="fixed size-full dark:bg-[url('/background.png')] bg-cover"></div>
      <Loading />
      <NavigationBar />
      <Landing />
    </div>
  )
}
