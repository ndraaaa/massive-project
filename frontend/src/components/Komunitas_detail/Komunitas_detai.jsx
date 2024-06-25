import React from "react";
import { Link } from "react-router-dom";
import Pepelingasih from "../../assets/1.png";
import arrowLeft from "../../assets/arrow-left.svg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Komunitas_detail.css";

const Komunitas_detail = () => {
  return (
    <div className="Komunitas">
      <Navbar />
      <div className="wrapper">
        <Link className="btn-back" to="/komunitas">
          {" "}
          <img src={arrowLeft} alt="" className="back-arrow" /> Kembali
        </Link>
        <div className="isi">
          <img src={Pepelingasih} alt="" />
          <h2 className="title-galeri">Pepelingasih</h2>
          <p className="keterangan" style={{ textAlign: "center" }}>
            Komunitas peduli lingkungan yang peduli terhadap lingkungan hidup.
            Berlokasi di daerah Jayapura, Papua dan tersebar di Indonesia.
          </p>

          <p style={{ color: "#79AC78" }}>Deskripsi</p>
          <hr
            style={{
              borderTop: "1px solid #C0C0C0",
            }}
          />
          <p className="keterangan">
            Sejak tahun 2017, Kementerian Pemuda dan Olahraga (Kemenpora)
            Indonesia menginisiasi program Pepelingasih sebagai wadah bagi anak
            muda untuk belajar bersama, meningkatkan kapasitas diri untuk
            menjadi pemimpin, dan memberi dampak yang baik bagi lingkungan hidup
            sekitar mereka. Kini Pepelingasih telah hadir di berbagai daerah di
            Indonesia, termasuk di antaranya di kota Jayapura, Papua yang
            dikoordinatori oleh Esti Muabuay, alumni program School of Eco
            Diplomacy kelas menengah tahun 2020. Pepelingasih Jayapura secara
            rutin dan aktif melakukan aksi nyata untuk lingkungan, seperti aksi
            pembersihan pantai dan menanam mangrove. Selain itu, komunitas ini
            juga aktif mengedukasi masyarakat di Jayapura tentang berbagai isu
            lingkungan dan mengajak mereka untuk turut ikut serta dalam
            aksi-aksi yang diadakan oleh Pepelingasih. Keberadaan komunitas ini
            menunjukkan bahwa meskipun para anggotanya memiliki kesibukan
            masing-masing, seperti sekolah dan kuliah, para anak muda ini tetap
            bersemangat untuk ikut berkontribusi secara nyata dalam usaha
            menjaga lingkungan.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Komunitas_detail;
