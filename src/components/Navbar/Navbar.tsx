import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar: React.FC = () => (
  <nav className="nav">
    <Link to="/" className="nav__link">Головна</Link>
    <Link to="/about" className="nav__link">Про нас</Link>
    <Link to="/subjects" className="nav__link">Дисципліни</Link>
    <Link to="/contacts" className="nav__link">Контакти</Link>
  </nav>
);