import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import GlicemiaPage from "./pages/GlicemiaPage";
import InsulinaPage from "./pages/InsulinaPage";
import HistoricoPage from "./pages/HistoricoPage";
import DicasPage from "./pages/DicasPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/glicemia" element={<GlicemiaPage />} />
        <Route path="/dashboard/insulina" element={<InsulinaPage />} />
        <Route path="/dashboard/historico" element={<HistoricoPage />} />
        <Route path="/dashboard/dicas" element={<DicasPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
