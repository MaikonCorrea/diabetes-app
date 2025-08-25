import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import RegistrosPage from "./pages/RegistrosPage";
import HistoricoPage from "./pages/HistoricoPage";
import DicasPage from "./pages/DicasPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/registros" element={<RegistrosPage />} />
        <Route path="/historico" element={<HistoricoPage />} />
        <Route path="/dicas" element={<DicasPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
