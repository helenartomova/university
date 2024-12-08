import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Subjects } from "./pages/Subjects";
import { Contacts } from "./pages/Contacts";
import { BackToTop } from "./components/BackToTop";

const App: React.FC = () => (
  <Router>
    <Header />
    <Navbar />
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
    <BackToTop />
    <Footer />
  </Router>
);

export default App;