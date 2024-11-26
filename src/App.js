import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homepage";
import MainContent from "./scenes/mainContent";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* Ana giriş sayfası */}
          <Route path="/dashboards/*" element={<HomePage />} />

          {/* MainContent için parent route */}
          <Route path="dashboards/smapp/*" element={<MainContent />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
