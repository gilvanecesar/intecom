import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.style.css";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-left">
        <Zap size={24} className="navbar-logo" />
        <span className="navbar-title">One Page</span>
      </div>

      <button className="navbar-toggle" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`navbar-menu ${open ? "open" : ""}`}>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/filtro"
          className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}
        >
          Filtro
        </NavLink>

        <NavLink
          to="/mecanismo"
          className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}
        >
          Mecanismo
        </NavLink>

        <NavLink
          to="/coluna"
          className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}
        >
          Coluna de Direção
        </NavLink>

      </nav>


    </header>
  );
}
