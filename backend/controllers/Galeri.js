import Galeri from '../models/GaleriModels.js';

const tambahGaleri = async (req, res) => {
  try {
    const { judul, isi, status } = req.body;
    const fotoPath = req.files['foto'] ? req.files['foto'][0].path : null;
    const videoPath = req.files['video'] ? req.files['video'][0].path : null;

    const GaleriBaru = await Galeri.create({
      judul,
      isi,
      foto: fotoPath, 
      video: videoPath, 
      status: status || 'publish'
    });

    const responseData = {
      message: 'Berhasil ditambahkan',
      data: {
        id: GaleriBaru.id,
        judul: GaleriBaru.judul,
        isi: GaleriBaru.isi,
        status: GaleriBaru.status,
        tanggal_Publikasi: GaleriBaru.tanggal_Publikasi,
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

const lihatGaleri = async (req, res) => {
  try {
    const galeriList = await Galeri.findAll({
      attributes: ["judul","isi", "foto", "video","status", "tanggal_publikasi"],
        });
    res.json(galeriList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const detailGaleri = async (req, res) => {
  try {
    const response = await Galeri.findOne({
      attributes: ["judul","isi", "foto", "video","status", "tanggal_publikasi"],
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "Galeri tidak ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


const updateGaleri = async (req, res) => {
  const { id } = req.params;
  const { judul, isi } = req.body;
  const { foto, video } = req.files || {};

  try {
    let galeriToUpdate = await Galeri.findByPk(id);
    if (!galeriToUpdate) {
      return res.status(404).json({ message: 'Galeri tidak ditemukan' });
    }

    galeriToUpdate.judul = judul;
    galeriToUpdate.isi = isi;
    galeriToUpdate.foto = foto ? foto[0].path : galeriToUpdate.foto;
    galeriToUpdate.video = video ? video[0].path : galeriToUpdate.video;

    await galeriToUpdate.save();

    res.json(galeriToUpdate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const hapusGaleri = async (req, res) => {
  const { id } = req.params;

  try {
    const galeriToDelete = await Galeri.findByPk(id);
    if (!galeriToDelete) {
      return res.status(404).json({ message: 'Galeri tidak ditemukan' });
    }

    await galeriToDelete.destroy();
    res.json({ message: 'Galeri berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { detailGaleri, hapusGaleri, lihatGaleri, tambahGaleri, updateGaleri };

