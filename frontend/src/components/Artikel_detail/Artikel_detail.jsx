import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-right.svg";
import Gambar10 from "../../assets/artI.png";
import Clock from "../../assets/clock.png";
import Pig from "../../assets/pig.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Artikel_detail.css";

const Artikel_detail = () => {
  return (
    <div className="ArtikelDetail">
      <div className="Artikel">
        <Navbar />
        <div className="wrapperArtikel">
          <p className="role">
            {" "}
            Beranda {">"} <b>Artikel</b>
          </p>

          <div className="contentt">
            <div className="isi">
              <h1 className="title-arikel">
                DIY Hiasan dinding pot bunga dari botol plastik bekas
              </h1>
              <p className="clock">
                <img src={Clock} alt="Clock" className="clock-icon" /> 7 Mei
                2024, 11.00 WIB
              </p>
              <img src={Gambar10} alt="Detail" />
              <p className="sourcegambar">
                Source: Kebun vertikal (Shutterstock)
              </p>

              <p className="keterangan">
                Bagi Anda yang ingin menggandakan dan membuat taman vertikal,
                ini sangat cocok menjadi pilihan. Botol plastik sangat cocok
                untuk mereka yang membutuhkan tempat penyimpanan berbagai
                tanaman baik dekoratif maupun fungsional. Taman vertikal semacam
                ini dapat ditempatkan hampir di mana saja jika Anda memiliki
                dinding kosong yang memiliki akses sinar matahari dan mudah
                disiram.
                <br />
                <br />
                <strong>Begini caranya:</strong>
                <br />
                <ol>
                  <li>
                    Siapkan bahan: Botol plastik 2 liter kosong dan bersih
                  </li>
                  <li>Gunting</li>
                  <li>Tali jemuran, benang, atau kawat</li>
                  <li>
                    Mesin cuci (dua per botol jika dipilih tali atau kawat)
                  </li>
                  <li>
                    Kotoran Bibit (herbal, sayuran, atau tanaman lainnya boleh
                    saja)
                  </li>
                </ol>
                <br />
                <strong>Cara membuat:</strong>
                <br />
                <ol>
                  <li>
                    Untuk mengamankan botol, Anda harus membuat dua lubang di
                    bagian bawah silinder dan dua di bagian atas botol. Lihat
                    gambar untuk contoh.
                  </li>
                  <li>
                    Selain lubang untuk melewatkan tali, Anda membutuhkan lubang
                    kecil di bagian bawah botol. Air yang digunakan untuk
                    mengairi bibit perlu dikeringkan.
                  </li>
                  <li>
                    Setelah itu, masukkan benang melalui lubang dan tarik keluar
                    melalui lubang lainnya. Kemudian cukup regangkan dan pasang
                    tali ke dinding.
                  </li>
                </ol>
              </p>
            </div>
            <div className="sidebar">
              <h3>Artikel Pilihan Lainnya</h3>
              <div className="featured-article">
                <img src={Pig} alt="Artikel" className="featured-image" />
                <div className="featured-text">
                  <h4>
                    Membuat celengan dengan bahan bekas dari botol plastik
                  </h4>
                  <p>
                    Ingin menghemat uang untuk pembelian khusus Anda berikutnya?
                    Mengapa tidak mengubah botol plastik bekas Anda menjadi
                    celengan daur ulang untuk menyimpan uang kembalian belanja.
                  </p>
                  <Link className="card-link3" to="#">
                    Baca selengkapnya{" "}
                    <img className="arrow3" src={arrow} alt="" srcset="" />
                  </Link>
                </div>
              </div>
              <div className="featured-article">
                <img src={Pig} alt="Artikel" className="featured-image" />
                <div className="featured-text">
                  <h4>
                    Membuat celengan dengan bahan bekas dari botol plastik
                  </h4>
                  <p>
                    Ingin menghemat uang untuk pembelian khusus Anda berikutnya?
                    Mengapa tidak mengubah botol plastik bekas Anda menjadi
                    celengan daur ulang untuk menyimpan uang kembalian belanja.
                  </p>
                  <Link className="card-link3" to="#">
                    Baca selengkapnya{" "}
                    <img className="arrow3" src={arrow} alt="" srcset="" />
                  </Link>
                </div>
              </div>
              <div className="featured-article">
                <img src={Pig} alt="Artikel" className="featured-image" />
                <div className="featured-text">
                  <h4>
                    Membuat celengan dengan bahan bekas dari botol plastik
                  </h4>
                  <p>
                    Ingin menghemat uang untuk pembelian khusus Anda berikutnya?
                    Mengapa tidak mengubah botol plastik bekas Anda menjadi
                    celengan daur ulang untuk menyimpan uang kembalian belanja.
                  </p>
                  <Link className="card-link3" to="#">
                    Baca selengkapnya{" "}
                    <img className="arrow3" src={arrow} alt="" srcset="" />
                  </Link>
                </div>
              </div>
              <div className="featured-article">
                <img src={Pig} alt="Artikel" className="featured-image" />
                <div className="featured-text">
                  <h4>
                    Membuat celengan dengan bahan bekas dari botol plastik
                  </h4>
                  <p>
                    Ingin menghemat uang untuk pembelian khusus Anda berikutnya?
                    Mengapa tidak mengubah botol plastik bekas Anda menjadi
                    celengan daur ulang untuk menyimpan uang kembalian belanja.
                  </p>
                  <Link className="card-link3" to="#">
                    Baca selengkapnya{" "}
                    <img className="arrow3" src={arrow} alt="" srcset="" />
                  </Link>
                </div>
              </div>
              <div className="featured-article">
                <img src={Pig} alt="Artikel" className="featured-image" />
                <div className="featured-text">
                  <h4>
                    Membuat celengan dengan bahan bekas dari botol plastik
                  </h4>
                  <p>
                    Ingin menghemat uang untuk pembelian khusus Anda berikutnya?
                    Mengapa tidak mengubah botol plastik bekas Anda menjadi
                    celengan daur ulang untuk menyimpan uang kembalian belanja.
                  </p>
                  <Link className="card-link3" to="#">
                    Baca selengkapnya{" "}
                    <img className="arrow3" src={arrow} alt="" srcset="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artikel_detail;
