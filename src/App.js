import React from "react";
import { darkTheme, lightTheme } from "./components/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./Dashboard";
import { AppContext } from "./components/AppContext";

function App() {
  const [light, setLight] = React.useState(true);

  return (
    <ThemeProvider theme={light ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppContext.Provider
        value={{ light, setLight }}>
        <Dashboard />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
