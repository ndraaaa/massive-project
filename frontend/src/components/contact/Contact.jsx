import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import qrCodeImage from "../../assets/qr_code.png";

const Contact = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleDonasiClick = (e) => {
    e.preventDefault();
    setShowOverlay(true);
  };

  const handleBatalClick = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      <Navbar />

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form">
            <form>
              <div className="contact-form-group">
                <label htmlFor="formName">Nama</label>
                <input
                  type="text"
                  className="contact-form-control"
                  id="formName"
                  placeholder="Nama"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="formEmail">Email</label>
                <input
                  type="email"
                  className="contact-form-control"
                  id="formEmail"
                  placeholder="Email"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="formPhoneNumber">Nomor Telepon</label>
                <input
                  type="text"
                  className="contact-form-control"
                  id="formPhoneNumber"
                  placeholder="No Telepon"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="formPaymentMethod">Metode Pembayaran</label>
                <select className="contact-form-control" id="formPaymentMethod">
                  <option>Pilih metode pembayaran</option>
                  <option>Credit Card</option>
                  <option>E-Wallet</option>
                </select>
              </div>

              <div className="contact-button-group">
                <button
                  type="submit"
                  className="contact-btn contact-btn-success"
                  onClick={handleDonasiClick}
                >
                  Donasi
                </button>
              </div>
            </form>
            <div className="contact-text-center mt-3">
              <a href="/donasi">Ganti jumlah donasi</a>
            </div>
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <img src={qrCodeImage} alt="QR Code" className="qr-code" />
            <button
              className="contact-btn contact-btn-cancel"
              onClick={handleBatalClick}
            >
              Batal
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Contact;