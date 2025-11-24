import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Removi Router
import Navbar from "./components/Navbar";
import { Filtro } from "./components/Filtro";
import Mecanismo from "./components/Mecanismo";
import Coluna from "./components/Coluna";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/filtro" element={<Filtro />} />
          <Route path="/mecanismo" element={<Mecanismo />} />
          <Route path="/coluna" element={<Coluna />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<h2>404: Página não encontrada!</h2>} />
        </Routes>
      </main>
    </div>
  );
}
