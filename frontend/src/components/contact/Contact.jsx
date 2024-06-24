import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
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
                  <option>Metode 1</option>
                  <option>Metode 2</option>
                </select>
              </div>

              <div className="contact-button-group">
                <button
                  type="submit"
                  className="contact-btn contact-btn-success"
                >
                  Donasi
                </button>
              </div>
            </form>
            <div className="contact-text-center mt-3">
              <a href="/Donasi">Ganti jumlah donasi</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;