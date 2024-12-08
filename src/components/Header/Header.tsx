import React from "react";
import "./Header.scss";

export const Header: React.FC = () => (
  <header className="header">
    <div className="header__title">
      <img src="/src/assets/logo.png" alt="logo" className="header__logo"/>
      <h1>Кафедра музейно-туристичної діяльності</h1>
    </div>
    <p className="header__facult">Факультет Культурології та Соціальних Комунікацій</p>
  </header>
);
