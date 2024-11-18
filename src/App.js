import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import SideNavbar from "./scenes/global/sidenavbar";
import Contacts from "./scenes/contacts";
import Discounts from "./scenes/discounts";
import Products from "./scenes/products";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex", height: "100vh" }}>
          {/* Sidebar */}
          <SideNavbar />

          {/* Main Content */}
          <div
            style={{
              flexGrow: 1, // Kalan alanı kaplar
              overflow: "auto", // İçerik taşarsa scroll yapılabilir
            }}
          >
            <Topbar />
            <Routes>
              <Route path="/customers" element={<Contacts />} />
              <Route path="/discounts" element={<Discounts />} />
              <Route path = "prices" element={<Products/>}/>
              {/* Diğer route'lar buraya eklenebilir */}
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
