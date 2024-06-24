import { default as Artikel, default as ArtikelModel } from '../models/ArtikelModels.js';

const tambahArtikel = async (req, res) => {
  try {
    const { judul, isi, status } = req.body;
    const fotoPath = req.files['foto'] ? req.files['foto'][0].path : null; // Check if foto exists in req.files
    const videoPath = req.files['video'] ? req.files['video'][0].path : null; // Check if video exists in req.files

    const artikel = await ArtikelModel.create({
      judul,
      isi,
      foto: fotoPath,
      video: videoPath,
      status: status || 'Draft'
    });

    // Construct response data
    const responseData = {
      message: 'Berhasil ditambahkan',
      data: {
        judul: artikel.judul,
        isi: artikel.isi,
        status: artikel.status,
        pathFoto: fotoPath,
        pathVideo: videoPath
      }
    };
    res.status(201).json(responseData);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};
const lihatArtikel = async (req, res) => {
  try {
    const artikel = await ArtikelModel.findAll({
      attributes: ["judul","isi", "foto", "video","status", "tanggal_publikasi"],
        });
    res.json(artikel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//berdasarkan id
const lihatArtikelByid = async (req, res) => {
  try {
    const response = await Artikel.findOne({
      attributes: ["judul","isi", "foto", "video","status", "tanggal_publikasi"],
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "Artikel tidak ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateArtikel = async (req, res) => {
  const { id } = req.params;
  const { judul, isi, status } = req.body;
  const files = req.files || {};
  const fotoPath = files.foto ? files.foto[0].path : null;
  const videoPath = files.video ? files.video[0].path : null;

  try {
    let artikel = await ArtikelModel.findByPk(id);
    if (!artikel) {
      return res.status(404).json({ message: 'Artikel tidak ditemukan' });
    }

    artikel.judul = judul;
    artikel.isi = isi;
    artikel.status = status || artikel.status;
    artikel.foto = fotoPath || artikel.foto;
    artikel.video = videoPath || artikel.video;

    await artikel.save();

    const responseData = {
      message: 'Artikel berhasil diupdate',
      data: {
        id: artikel.id,
        judul: artikel.judul,
        isi: artikel.isi,
        status: artikel.status,
        fotoPath: artikel.foto,
        videoPath: artikel.video
      }
    };

    res.json(responseData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const hapusArtikel = async (req, res) => {
  const { id } = req.params;

  try {
    const artikel = await ArtikelModel.findByPk(id);
    if (!artikel) {
      return res.status(404).json({ message: 'Artikel tidak ditemukan' });
    }

    await artikel.destroy();
    res.json({ message: 'Artikel berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { hapusArtikel, lihatArtikel, lihatArtikelByid, tambahArtikel, updateArtikel };

