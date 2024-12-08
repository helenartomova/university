import React from "react";
import "./Contacts.scss";

export const Contacts: React.FC = () => (
  <div className="contacts">
    <h2>Контакти</h2>
    <p>Адреса: м. Харків, вул. Бурсацький узвіз 4, корпус №2, кімната 55</p>
    <p>Телефон: <a href="tel:+380577311388">+38 (057) 731-13-88</a></p>
    <p>Email: <a href="mailto:kozaks_1978@ukr.net">kozaks_1978@ukr.net</a>, <a href="mailto:lab_ktb@xdak.ukr.education">lab_ktb@xdak.ukr.education</a></p>
    <h3>Розташування</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.9343234324547!2d36.226471876459!3d49.9938407715086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0faa6c162a1%3A0xbe33507512832370!2z0KXQsNGA0YzQutC-0LLRgdC60LDRjyDQk9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0JDQutCw0LTQtdC80LjRjyDQmtGD0LvRjNGC0YPRgNGL!5e0!3m2!1sru!2sde!4v1733670381375!5m2!1sru!2sde" width="100%" height="450" loading="lazy"></iframe>
  </div>
);