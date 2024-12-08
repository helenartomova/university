import React from "react";
import "./Subjects.scss";

export const Subjects: React.FC = () => (
  <div className="subjects">
    <h2 className="subjects__title">Дисципліни</h2>
    <ul className="subjects__list">
      <li className="subjects__list__item">Креатив у рекламі - доц. Булах Т.Д.</li>
      <li className="subjects__list__item">Web-дизайн - доц. Брусенцев В.О.</li>
      <li className="subjects__list__item">Основи фінансової грамотності - доц. Гетьман Л.Г.</li>
      <li className="subjects__list__item">Ідеологія в дискурсі гуманітарних наук - ст.в. Мірошниченко В.С.</li>
      <li className="subjects__list__item">Інвестиційний менеджмент у соціокультурній сфері - доц. Гетьман Л.Г.</li>
      <li className="subjects__list__item">Арт-менеджмент - ст.в. Ожога-Масловська А.В.</li>
      <li className="subjects__list__item">Теорія культури - проф. Панков Г.Д.</li>
      <li className="subjects__list__item">Економіка культури - доц. Гетьман Л.Г.</li>
    </ul>
  </div>
);