import Donasi from '../models/DonasiModels.js';


const tambahDonasi = async (req, res) => {
  const { nama, jumlah, no_telp, email } = req.body;
  try {
    const donasiBaru = await Donasi.create({
      nama,
      jumlah,
      no_telp,
      email,
      datetime: new Date()
    });

   
    res.status(201).json({
      nama: donasiBaru.nama,
      email: donasiBaru.email,
      no_telp: donasiBaru.no_telp,
      jumlah: donasiBaru.jumlah,
      tanggal_donasi: donasiBaru.date
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const lihatSemuaDonasi = async (req, res) => {
  try {
    const donasi = await Donasi.findAll({
      attributes: ["id","nama", "email", "no_telp", "jumlah","date"],
        });
    res.json(donasi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const lihatDonasiById = async (req, res) => {
  try {
    const response = await Donasi.findOne({
      attributes:["nama", "email", "no_telp", "jumlah","date"],
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "Donasi tidak ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


const updateDonasi = async (req, res) => {
  const { id } = req.params;
  const { nama, jumlah, no_telp, email } = req.body;
  try {
    let donasi = await Donasi.findByPk(id);
    if (!donasi) {
      return res.status(404).json({ message: 'Donasi tidak ditemukan' });
    }
    donasi.nama = nama;
    donasi.jumlah = jumlah;
    donasi.no_telp = no_telp;
    donasi.email = email;
    await donasi.save();
    return res.status(200).json({ msg: "Donasi Updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const hapusDonasi = async (req, res) => {
  const { id } = req.params;
  try {
    const donasi = await Donasi.findByPk(id);
    if (!donasi) {
      return res.status(404).json({ message: 'Donasi tidak ditemukan' });
    }
    await donasi.destroy();
    res.json({ message: 'Donasi berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { hapusDonasi, lihatDonasiById, lihatSemuaDonasi, tambahDonasi, updateDonasi };

