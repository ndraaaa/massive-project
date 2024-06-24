import React from "react";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Logoo from "../../assets/pedulink.png";
import Tiktok from "../../assets/tiktok.png";
import Twitter from "../../assets/twit.png";
import Youtube from "../../assets/youtube.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="hijau">
      <div className="wrapperr">
        <div className="column">
          <div className="logo-container">
            <a href="#" className="logo">
              <img src={Logoo} alt="" />
            </a>
            <p className="pedulink-definisi">
              Sebuah aplikasi edukasi dan informasi mengenai cara menanggulangi
              sampah plastik. Serta mewadahi komunitas peduli lingkungan kecil
              yang ingin berkembang dilingkungan masyarakat.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="links">
            <div className="socialmedia">
              <h3 className="sc">Social Media</h3>
              <div className="social-icons">
                <a href="#">
                  <img src={Instagram} alt="" />
                </a>
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#">
                  <img src={Youtube} alt="" />
                </a>
                <a href="#">
                  <img src={Tiktok} alt="" />
                </a>
                <a href="#">
                  <img src={Twitter} alt="" />
                </a>
              </div>

              <div className="copyright">
                © 2024 Situs Arca Gupolo. All Right Reserved
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="links">
            <h3>Pendukung</h3>
            <li>
              <a href="#">Tentang kami</a>
            </li>
            <li>
              <a href="#">Kontak Kami</a>
            </li>
            <li>
              <a href="#">Pertanyaan Umum</a>
            </li>
            <li>
              <a href="#">kebijakan Pribadi</a>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
