import { Theme } from "./app/ThemeProvider";
import NavigationBar from "./components/NavigationBar";
import Inactive from "./pages/Inactive";
import Landing from "./pages/Landing";
import { useContext, useEffect } from "preact/hooks";
import Loading from "./pages/Loading";

export function App() {
  const context = useContext(Theme);

  const websiteIsInactive = true;
  const websiteInactivityTitle = "JITS WEBSITE";
  const websiteInactivitySubtitle = "Under Development...";

  useEffect(() => {
    console.log("Theme is", context);
  }, [])

  if (websiteIsInactive) return <><Loading /><Inactive title={websiteInactivityTitle} subtitle={websiteInactivitySubtitle} /></>;

  return (
    <>
      <Loading />
      <NavigationBar />
      <Landing />
    </>
  )
}
