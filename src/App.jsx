import { useState } from "react";
import { ThemeContext } from "./context";
import Page from "./Page/Page";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Page />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
