import React, { useState } from "react";
import Celeng from "../../assets/babi.png";
import UpdateIcon from "../../assets/edit.png";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";

const Dash = () => {
  // State untuk mengelola status pilihan checkbox (semua dipilih atau tidak) dan status artikel
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  // Data sementara untuk daftar artikel
  const articles = [
    {
      id: 1,
      image: Celeng,
      title: "Membuat celengan dengan bahan bekas dari botol plastik",
      description:
        "Ingin menghemat uang untuk pembelian khusus Anda berikutnya? Mengapa tidak mengubah botol plastik bekas Anda menjadi celengan daur ulang untuk menyimpan uang kembalian belanja.",
      date: "25 Juni 2024 14:30",
      user: "John Doe",
      status: "publish",
    },
    {
      id: 2,
      image: Celeng,
      title: "Membuat celengan dengan bahan bekas dari botol plastik",
      description:
        "Ingin menghemat uang untuk pembelian khusus Anda berikutnya? Mengapa tidak mengubah botol plastik bekas Anda menjadi celengan daur ulang untuk menyimpan uang kembalian belanja.",
      date: "26 Juni 2024 10:15",
      user: "Jane Smith",
      status: "draft",
    },
  ];

  // Fungsi untuk mengubah status pilihan checkbox semua
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newSelectedItems = articles.map((article) => ({
      ...article,
      selected: newSelectAll,
    }));
    setSelectedItems(newSelectedItems);
  };

  // Fungsi untuk mengubah status pilihan checkbox artikel individual
  const handleCheckboxChange = (id) => {
    const newSelectedItems = selectedItems.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setSelectedItems(newSelectedItems);
    // Periksa apakah semua checkbox artikel sudah dipilih
    const allSelected = newSelectedItems.every((item) => item.selected);
    setSelectAll(allSelected);
  };

  return (
    <div>
      <Navbar />
      <div
        className="hero-body"
        style={{ marginTop: "50px", minHeight: "100vh" }}
      >
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title">Daftar Artikel</h1>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <button className="button is-primary">Article Baru</button>
                <button className="button is-danger ml-2">Hapus Artikel</button>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th style={{ textAlign: "center" }}>Image</th>
                      <th style={{ textAlign: "center" }}>
                        Judul & Deskripsi Artikel
                      </th>
                      <th style={{ textAlign: "center" }}>Tanggal</th>
                      <th style={{ textAlign: "center" }}>User</th>
                      <th style={{ textAlign: "center" }}>Status</th>
                      <th style={{ textAlign: "center" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((article) => (
                      <tr key={article.id}>
                        <td
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={
                              selectedItems.find(
                                (item) => item.id === article.id
                              )?.selected || false
                            }
                            onChange={() => handleCheckboxChange(article.id)}
                          />
                        </td>
                        <td>
                          <img
                            src={article.image}
                            alt="Article"
                            style={{ maxWidth: "100px" }}
                          />
                        </td>
                        <td style={{ maxWidth: "400px" }}>
                          <div>
                            <strong>{article.title}</strong>
                          </div>
                          <div style={{ fontSize: "12px" }}>
                            {article.description}
                          </div>
                        </td>
                        <td style={{ textAlign: "center" }}>{article.date}</td>
                        <td style={{ textAlign: "center" }}>{article.user}</td>
                        <td style={{ textAlign: "center" }}>
                          {article.status}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <span className="icon">
                            <img
                              src={UpdateIcon}
                              alt="update"
                              style={{ maxWidth: "20px" }}
                            />
                          </span>
                          <span className="icon">
                            <i className="fas fa-trash-alt"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dash;
