import React from "react";
import { NavLink } from "react-router-dom";
import Logoo from "../../assets/pedulink.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        <img src={Logoo} alt="" srcSet="" />
      </a>

      <ul>
        <li>
          <div className="search-container">
            <input
              type="text"
              placeholder="Pencarian"
              className="search-input"
            />
          </div>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Beranda
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/komunitas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Komunitas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/galeri"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Galeri
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donasi"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Donasi
          </NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
