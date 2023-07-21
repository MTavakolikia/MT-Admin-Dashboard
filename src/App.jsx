import { ColorModeContext, LanguageContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/Team";
import Contacts from "./scenes/Contacts";
import Invoices from "./scenes/Invoices";
import Calendar from "./scenes/Calendar";
import Geography from "./scenes/Geography";
import Faq from "./scenes/Faq";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import Bar from "./scenes/Bar";
import Form from "./scenes/Form";
import SidebarSection from "./scenes/global/Sidebar";

function App() {
  const [theme, colorMode, languageMode] = useMode();
  return (
    <>
      <LanguageContext.Provider value={languageMode}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <SidebarSection />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
