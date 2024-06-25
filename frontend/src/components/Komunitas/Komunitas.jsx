import React from "react";
import { Link } from "react-router-dom";
import image4 from "../../assets/1.png";
import image5 from "../../assets/2.png";
import image6 from "../../assets/3.png";
import arrow from "../../assets/arrow-right.svg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Komunitas.css";

const Galeri = () => {
  return (
    <div className="Komunitas">
      <Navbar />
      <div className="wrapper">
        <h1 className="title-galeri">Komunitas</h1>
        <p className="course-name">
          Lihat komunitas lokal yang tergabung dalam website kami.
        </p>
        <div className="card">
          <div className="card-body">
            <div className="card-isi">
              <img src={image4} alt="" srcSet="" />
              <p className="card-title">Pepelingasih</p>
              <p className="card-place">
                Jayapura, Papua{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image5} alt="" srcSet="" />
              <p className="card-title">Our Conservasea</p>
              <p className="card-place">
                Papua{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image6} alt="" srcSet="" />
              <p className="card-title">Pandawara Group</p>
              <p className="card-place">
                Bandung, Jawa Barat{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-isi">
              <img src={image4} alt="" srcSet="" />
              <p className="card-title">Pepelingasih</p>
              <p className="card-place">
                Jayapura, Papua{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image5} alt="" srcSet="" />
              <p className="card-title">Our Conservasea</p>
              <p className="card-place">
                Papua{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image6} alt="" srcSet="" />
              <p className="card-title">Pandawara Group</p>
              <p className="card-place">
                Bandung, Jawa Barat{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-isi">
              <img src={image4} alt="" srcSet="" />
              <p className="card-title">Pepelingasih</p>
              <p className="card-place">
                Jayapura, Papua{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image5} alt="" srcSet="" />
              <p className="card-title">Our Conservasea</p>
              <p className="card-place">
                Papua{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image6} alt="" srcSet="" />
              <p className="card-title">Pandawara Group</p>
              <p className="card-place">
                Bandung, Jawa Barat{" "}
                <Link className="card-link" to="/komunitas-detail">
                  Lihat Komunitas{" "}
                  <img className="arrow" src={arrow} alt="" srcSet="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Galeri;
