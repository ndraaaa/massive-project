import argon2 from 'argon2';
import User from '../models/UserModels.js'; // Sesuaikan path dengan struktur aplikasi Anda

// Controller untuk menambahkan user baru
const tambahUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await argon2.hash(password); // Hash password menggunakan Argon2
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword // Simpan password yang di-hash
    });

    // Mengembalikan respons hanya dengan atribut yang diinginkan
    res.status(201).json({
      username: newUser.username,
      email: newUser.email,
      role: newUser.role
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller untuk melihat semua user
const lihatSemuaUser = async (req, res) => {
  try {
    const users = await User.findAll({
  attributes: ["id","username", "email", "role"],
    });
  
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller untuk melihat detail user berdasarkan ID
const lihatUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ["username", "email", "role"],
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mengupdate user berdasarkan ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    let user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }
    // Hash password hanya jika password diubah
    if (password) {
      const hashedPassword = await argon2.hash(password);
      user.password = hashedPassword;
    }
    user.username = username;
    user.email = email;
    await user.save();
    return res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(400).json({ msg: error.message });
  }
};

// Controller untuk menghapus user berdasarkan ID
const hapusUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }
    await user.destroy();
    res.json({ message: 'User berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { hapusUser, lihatSemuaUser, lihatUserById, tambahUser, updateUser };

