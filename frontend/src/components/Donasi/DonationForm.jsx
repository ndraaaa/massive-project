import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./DonasiForm.css";
import donasiImage from "../../assets/donasi.jpeg";

const DonationForm = () => {
  return (
    <div>
      <Navbar />
      <div className="donation-container">
        <div className="donation-content">
          <div className="donation-image">
            <img src={donasiImage} alt="Donasi" />
          </div>
          <div className="donation-form">
            <p className="welcome-text">
              Selamat datang di Pedulink. Silahkan isi formulir di bawah ini.
              Semoga berkah.
            </p>
            <form>
              <div className="form-group">
                <label htmlFor="formDonationType">Jenis Donasi</label>
                <select className="form-control" id="formDonationType">
                  <option>Pilih jenis donasi</option>
                  <option>Kegiatan Sosial</option>
                  <option>Pelestarian Alam</option>
                  <option>Fasilitas</option>
                  <option>Penanggulangan Bencana</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="formDonationAmount">Jumlah Donasi</label>
                <input
                  type="text"
                  className="form-control"
                  id="formDonationAmount"
                  placeholder="Jumlah Donasi"
                />
              </div>

              <div className="form-group">
                <label>Frekuensi Donasi</label>
                <div>
                  <label className="radio-container">
                    <input type="radio" name="donationFrequency" />
                    <span className="checkmark"></span> Bulanan
                  </label>
                  <label className="radio-container">
                    <input type="radio" name="donationFrequency" />
                    <span className="checkmark"></span> Satu kali
                  </label>
                </div>
              </div>

              <div className="button-group">
                <button type="button" className="btn btn-secondary">
                  Batal
                </button>
                <Link to="/contact" className="btn btn-success no-underline">
                  Donasi
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonationForm;
