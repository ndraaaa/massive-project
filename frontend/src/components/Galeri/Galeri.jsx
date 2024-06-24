import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-right.svg";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Galeri.css";

const Galeri = () => {
  return (
    <div className="Galeri">
      <Navbar />
      <div className="wrapper">
        <h1 className="title-galeri">Galeri</h1>
        <p className="course-name">
          Jelajahi kumpulan foto-foto kami yang penuh makna dan cerita.
        </p>
        <div className="card">
          <p className="card-name"> Kegiatan Kami</p>
          <div className="card-body">
            <div className="card-isi">
              <img src={image4} alt="" srcset="" />
              <p className="card-title">Memilih Sampah Plastik</p>
              <p className="card-place">
                GreenPlace{" "}
                <Link className="card-link" to="/galeri-detail">
                  Lihat Selengkapnya{" "}
                  <img className="arrow" src={arrow} alt="" srcset="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image5} alt="" srcset="" />
              <p className="card-title">Membersihkan Pantai Kenj...</p>
              <p className="card-place">
                EcoSweep{" "}
                <Link className="card-link" to="/galeri-detail">
                  Lihat Selengkapnya{" "}
                  <img className="arrow" src={arrow} alt="" srcset="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image6} alt="" srcset="" />
              <p className="card-title">Mendaur ulang sampah</p>
              <p className="card-place">
                EarthQ{" "}
                <Link className="card-link" to="/galeri-detail">
                  Lihat Selengkapnya{" "}
                  <img className="arrow" src={arrow} alt="" srcset="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="card-name"> Karya Kami</p>
          <div className="card-body">
            <div className="card-isi">
              <img src={image7} alt="" srcset="" />
              <p className="card-title">Hiasan dinding daur ulang</p>
              <p className="card-place">
                EarthQ{" "}
                <Link className="card-link" to="/galeri-detail">
                  Lihat Selengkapnya{" "}
                  <img className="arrow" src={arrow} alt="" srcset="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image8} alt="" srcset="" />
              <p className="card-title">Mainan mobil dari plastik</p>
              <p className="card-place">
                EarthQ{" "}
                <Link className="card-link" to="/galeri-detail">
                  Lihat Selengkapnya{" "}
                  <img className="arrow" src={arrow} alt="" srcset="" />
                </Link>
              </p>
            </div>
            <div className="card-isi">
              <img src={image9} alt="" srcset="" />
              <p className="card-title">Mainan mobil dari plastik</p>
              <p className="card-place">
                EarthQ{" "}
                <Link className="card-link" to="/galeri-detail">
                  Lihat Selengkapnya{" "}
                  <img className="arrow" src={arrow} alt="" srcset="" />
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
