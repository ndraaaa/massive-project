import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Artikel_detail, Beranda, Galeri, Galeri_detail, DonationForm, Contact } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/galeri-detail" element={<Galeri_detail />} />
        <Route path="/artikel-detail" element={<Artikel_detail />} />
        <Route path="/Donasi" element={<DonationForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
