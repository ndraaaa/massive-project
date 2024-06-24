import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";
import Gambar10 from "../../assets/imagedetail.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Galeri_detail.css";

const Galeri_detail = () => {
  return (
    <div className="Galeri">
      <Navbar />
      <div className="wrapper">
        <Link className="btn-back" to="/galeri">
          {" "}
          <img src={arrowLeft} alt="" className="back-arrow" /> Kembali
        </Link>
        <div className="isi">
          <img src={Gambar10} alt="" />
          <h2 className="title-galeri">Membersihkan Pantai Kenjeran</h2>

          <p style={{ color: "#79AC78" }}>Deskripsi</p>
          <hr
            style={{
              borderTop: "1px solid #C0C0C0",
            }}
          />
          <p className="keterangan">
            Kegiatan rutin EcoSweep untuk menjaga lingkungan, kali ini kami
            berkesempatan untuk membersihkan pantai di Surabaya, yaitu Pantai
            Kenjeran. Pada kesempatan kali ini, kami mengerahkan relawan
            sebanyak 20 orang untuk ikut serta kegiatan membersihkan Pantai
            Kenjeran. Kegiatan ini bertujuan untuk menyadarkan para warga agar
            tidak membuang sampah sembarangan dan juga untuk menjadikan Pantai
            Kenjeran sebagai tempat wisata yang aman dan nyaman.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Galeri_detail;
