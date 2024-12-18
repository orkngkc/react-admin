import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Topbar from "../global/topbar";
import SideNavbar from "../global/sidenavbar";
import Contacts from "../contacts";
import Discounts from "../discounts";
import Products from "../products";
import Invoices from "../invoices";

function MainContent() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <CssBaseline />
        <Topbar />
        <Routes>
          <Route path="customers" element={<Contacts />} />
          <Route path="discounts" element={<Discounts />} />
          <Route path="prices" element={<Products />} />
          <Route path="invoices" element={<Invoices />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainContent;
