import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar: React.FC = () => (
  <nav className="nav">
    <Link to="/university" className="nav__link">Головна</Link>
    <Link to="/university/about" className="nav__link">Про нас</Link>
    <Link to="/university/subjects" className="nav__link">Дисципліни</Link>
    <Link to="/university/contacts" className="nav__link">Контакти</Link>
  </nav>
);