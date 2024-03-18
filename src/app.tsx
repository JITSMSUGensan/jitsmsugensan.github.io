import { Theme } from "./app/ThemeProvider";
import NavigationBar from "./components/NavigationBar";
import Inactive from "./pages/Inactive";
import Landing from "./pages/Landing";
import { useContext, useEffect } from "preact/hooks";

export function App() {
  const context = useContext(Theme);

  const websiteIsInactive = false;
  const websiteInactivityTitle = "JITS WEBSITE";
  const websiteInactivitySubtitle = "Under Development...";

  useEffect(() => {
    console.log("Theme is", context);
  }, [])

  if (websiteIsInactive) return <Inactive title={websiteInactivityTitle} subtitle={websiteInactivitySubtitle} />;

  return (
    <>
      <NavigationBar />
      <Landing />
    </>
  )
}
