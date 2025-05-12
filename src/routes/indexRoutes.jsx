import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "../pages/Sign";
import LogIn from "../pages/logIn";
import Dashboard from "../pages/Dashboard";
import Cambio from "../pages/Cambio";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Cambio" element={<Cambio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
