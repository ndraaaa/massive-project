import React from "react";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Logoo from "../../assets/pedulink.png";
import Tiktok from "../../assets/tiktok.png";
import Twitter from "../../assets/twit.png";
import Youtube from "../../assets/youtube.png";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#B0D9B1", padding: "1rem" }}
    >
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-one-quarter">
            <figure
              className="image"
              style={{
                width: "140px",
                maxHeight: "none",
                marginBottom: "1rem",
              }}
            >
              <img
                src={Logoo}
                alt="Logo"
                style={{ width: "100%", height: "100%" }}
              />
            </figure>
            <p
              style={{
                color: "#656565",
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "1.5" /* 21px */,
                marginTop: "0.5rem",
                maxWidth: "300px",
              }}
            >
              Sebuah aplikasi edukasi dan informasi mengenai cara menanggulangi
              sampah plastik. Serta mewadahi komunitas peduli lingkungan kecil
              yang ingin berkembang dilingkungan masyarakat.
            </p>
          </div>
          <div className="column">
            <div className="content has-text-centered">
              <p
                className="is-size-5 has-text-weight-bold"
                style={{ paddingTop: "2rem" }}
              >
                Social Media
              </p>
              <div className="social-icons">
                <img
                  src={Instagram}
                  alt="Instagram"
                  style={{ marginRight: "10px" }}
                />
                <img
                  src={Facebook}
                  alt="Facebook"
                  style={{ marginRight: "10px" }}
                />
                <img
                  src={Youtube}
                  alt="Youtube"
                  style={{ marginRight: "10px" }}
                />
                <img
                  src={Tiktok}
                  alt="Tiktok"
                  style={{ marginRight: "10px" }}
                />
                <img
                  src={Twitter}
                  alt="Twitter"
                  style={{ marginRight: "10px" }}
                />
              </div>
              <p>© 2024 Situs Arca Gupolo. All Right Reserved</p>
            </div>
          </div>
          <div className="column is-4 is-one-quarter">
            <div className="content" style={{ paddingLeft: "5rem" }}>
              <h5 style={{ paddingTop: "1rem" }}>Pendukung</h5>
              <ul>
                <li>
                  <a href="#" style={{ color: "black" }}>
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "black" }}>
                    Kontak Kami
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "black" }}>
                    Pertanyaan Umum
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "black" }}>
                    Kebijakan Pribadi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
