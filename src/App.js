import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/topbar";

//import { Dashboard } from ".scenes/Dashboard";
import SideNavbar from "./scenes/global/sidenavbar"

import Contacts from "./scenes/contacts"
/* import Invoices from "./scenes/invoices"
import Contacts from "./scenes/contacts"
import Bar from "./scenes/bar"
import Form from "./scenes/form"
import Line from "./scenes/line"
import Pie from "./scenes/pie"
import FAQ from "./scenes/faq"
import Geography from "./scenes/geograhy"
import Calendar from "./scenes/calendar" */


function App() {
  const [theme, colorMode] = useMode();


  return (
  
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideNavbar/>
          <main className = "content">
            <Topbar />
             <Routes>
              <Route path = "/customers" element= {<Contacts/>} />
              {/* <Route path = "/" element= {<Dashboard/>} />
              <Route path = "/team" element= {<Team/>} />
              
              <Route path = "/invoices" element= {<Invoices/>} />
              <Route path = "/form" element= {<Form/>} />
              <Route path = "/bar" element= {<Bar/>} />
              <Route path = "/pie" element= {<Pie/>} />
              <Route path = "/line" element= {<Line/>} />
              <Route path = "/geography" element= {<Geography/>} />
              <Route path = "/calendar" element= {<Calendar/>} />
              <Route path = "/faq" element= {<FAQ/>} /> */}
             </Routes>
          </main>
        </div>
      </ThemeProvider>
          
    </ColorModeContext.Provider>
    
  );
}

export default App;
