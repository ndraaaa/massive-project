// controllers/KomunitasController.js
import Komunitas from '../models/KomunitasModels.js';

const tambahKomunitas = async (req, res) => {
  try {
    const { judul, isi, status } = req.body;
    const fotoPath = req.files['foto'] ? req.files['foto'][0].path : null;
    const videoPath = req.files['video'] ? req.files['video'][0].path : null;

    const komunitasBaru = await Komunitas.create({
      judul,
      isi,
      foto: fotoPath,
      video: videoPath,
      status: status || 'publish'
    });

    const responseData = {
      message: 'Komunitas berhasil ditambahkan',
      data: {
        id: komunitasBaru.id,
        judul: komunitasBaru.judul,
        isi: komunitasBaru.isi,
        status: komunitasBaru.status,
        tanggal_Publikasi: komunitasBaru.tanggal_Publikasi,
        pathFoto: fotoPath,
        pathVideo: videoPath
      }
    };

    res.status(201).json(responseData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const lihatSemuaKomunitas = async (req, res) => {
  try {
    const komunitas = await Komunitas.findAll({
      attributes: ["judul","isi", "foto", "video","status", "tanggal_publikasi"]
    });
    res.json(komunitas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const detailKomunitas = async (req, res) => {
  try {
    const response = await Komunitas.findOne({
      attributes: ["judul","isi", "foto", "video","status", "tanggal_publikasi"],
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "Komunitas tidak ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateKomunitas = async (req, res) => {
  const { id } = req.params;
  const { judul, isi, status } = req.body;
  const { foto, video } = req.files || {};

  try {
    let komunitas = await Komunitas.findByPk(id);
    if (!komunitas) {
      return res.status(404).json({ message: 'Komunitas tidak ditemukan' });
    }

    komunitas.judul = judul;
    komunitas.isi = isi;
    komunitas.status = status || komunitas.status;
    komunitas.foto = foto ? foto[0].path : komunitas.foto;
    komunitas.video = video ? video[0].path : komunitas.video;

    await komunitas.save();

    res.json(komunitas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const hapusKomunitas = async (req, res) => {
  const { id } = req.params;

  try {
    const komunitas = await Komunitas.findByPk(id);
    if (!komunitas) {
      return res.status(404).json({ message: 'Komunitas tidak ditemukan' });
    }

    await komunitas.destroy();
    res.json({ message: 'Komunitas berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {
  detailKomunitas, hapusKomunitas, lihatSemuaKomunitas, tambahKomunitas, updateKomunitas
};

