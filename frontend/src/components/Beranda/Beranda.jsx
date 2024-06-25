import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-right.svg";
import circleline from "../../assets/cricleline.png";
import imgArtikel from "../../assets/imgArtikel.png";
import ryc from "../../assets/ryc.png";
import tong from "../../assets/tong.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Beranda.css";

const Beranda = () => {
  return (
    <div className="Beranda">
      <Navbar />

      <div className="page-beranda">
        <div className="page-isi">
          <p className="course-name">Selamatkan Bumi,</p>
          <h1 className="title-Beranda">
            KATAKAN TIDAK <br /> PADA PLASTIK
          </h1>
          <a href="#page-beranda" className="tombol-mulai">
            Mulai Sekarang
          </a>
        </div>
      </div>

      <div className="page-beranda" id="page-beranda">
        <div className="page-isi2">
          <h3 className="title2">
            Sampah plastik masih menjadi <br /> salah satu permasalahan <br />
            lingkungan di dunia
          </h3>
          <div className="card-l">
            <p className="total">65,2</p>
            <p className="text-total">Juta ton</p>
            <p className="ket">Sampah Plastik</p>
            <p className="garis">-----------------------</p>
            <p className="isi-total">
              Menurut laporan Bank Dunia, pada tahun 2020 Indonesia memproduksi
              sekitar 65,2 juta ton sampah.
            </p>
          </div>
          <img src={tong} alt="Deskripsi alternatif" className="gambar-kanan" />
        </div>
      </div>

      <div className="page-beranda">
        <div className="page-isi3">
          <p>Kurangi Gunakan Kembali, Daur Ulang</p>
          <h3 className="title3">3R Untuk Bumi</h3>
        </div>

        <div className="container_horizontal">
          <img className="ryc" src={ryc} alt="" />
          <img src={circleline} alt="" />
          <div className="textvertical">
            <div className="tex1">
              <h3>Reduce</h3>
              <p>Mengurangi produksi atau penggunaan sampah sedari awal.</p>
            </div>
            <div className="tex2">
              <h3>Reuse</h3>
              <p>
                Menggunakan kembali material yang aman dan bisa digunakan
                kembali.
              </p>
            </div>
            <div className="tex3">
              <h3>Recycle</h3>
              <p>
                Proses untuk menjadikan suatu bahan bekas menjadi bahan baru
                berkualitas tinggi dan bernilai ekonomis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-beranda4">
        <div className="page-isi4">
          <h3 className="title4">Artikel Terbaru</h3>
          <Link className="card-link" to="#">
            Lihat lainnya <img className="arrow" src={arrow} alt="" srcSet="" />
          </Link>
        </div>

        <div className="card2">
          <div className="card-body2">
            <div className="card-isi2">
              <img src={imgArtikel} alt="" srcSet="" />
              <p className="waktu">7 Mei 2024, 11.00 WIB</p>
              <p className="card-title2">
                DIY Hiasan dinding pot bunga dari botol plastik bekas
              </p>
              <p className="card-place2">
                Bagi Anda yang ingin menggandakan dan membuat taman vertikal,
                ini sangat cocok menjadi pilihan. Botol plastik sangat cocok
                untuk mereka yang membutuhkan tempat penyimpanan berbagai
                tanaman baik...{" "}
              </p>
              <Link className="card-link2" to="/artikel-detail">
                Baca selengkapnya{" "}
                <img className="arrow2" src={arrow} alt="" srcSet="" />
              </Link>
            </div>
            <div className="card-isi2">
              <img src={imgArtikel} alt="" srcSet="" />
              <p className="waktu">7 Mei 2024, 11.00 WIB</p>
              <p className="card-title2">
                DIY Hiasan dinding pot bunga dari botol plastik bekas
              </p>
              <p className="card-place2">
                Bagi Anda yang ingin menggandakan dan membuat taman vertikal,
                ini sangat cocok menjadi pilihan. Botol plastik sangat cocok
                untuk mereka yang membutuhkan tempat penyimpanan berbagai
                tanaman baik...{" "}
              </p>
              <Link className="card-link2" to="/artikel-detail">
                Baca selengkapnya{" "}
                <img className="arrow2" src={arrow} alt="" srcSet="" />
              </Link>
            </div>
            <div className="card-isi2">
              <img src={imgArtikel} alt="" srcSet="" />
              <p className="waktu">7 Mei 2024, 11.00 WIB</p>
              <p className="card-title2">
                DIY Hiasan dinding pot bunga dari botol plastik bekas
              </p>
              <p className="card-place2">
                Bagi Anda yang ingin menggandakan dan membuat taman vertikal,
                ini sangat cocok menjadi pilihan. Botol plastik sangat cocok
                untuk mereka yang membutuhkan tempat penyimpanan berbagai
                tanaman baik...{" "}
              </p>
              <Link className="card-link2" to="/artikel-detail">
                Baca selengkapnya{" "}
                <img className="arrow2" src={arrow} alt="" srcSet="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="page-last">
        <div className="page-isi">
          <p className="course-name">
            Satu Donasi, Seribu Harapan. Beraksi untuk Bumi Sekarang
          </p>
          <h1 className="title-Beranda">
            Ingin ikut berkontribusi <br /> menyelamatkan <br /> bumi?
          </h1>
          <a href="/donasi" className="tombol-mulai">
            Donasi Sekarang
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Beranda;
