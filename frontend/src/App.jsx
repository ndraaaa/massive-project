import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import {
  Artikel_detail,
  Beranda,
  Contact,
  Dashboard,
  DonationForm,
  Galeri,
  Galeri_detail,
  Komunitas,
  Komunitas_detail,
  Login,
} from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/galeri-detail" element={<Galeri_detail />} />
        <Route path="/komunitas-detail" element={<Komunitas_detail />} />
        <Route path="/artikel-detail" element={<Artikel_detail />} />
        <Route path="/donasi" element={<DonationForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
