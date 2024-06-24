import argon2 from "argon2";
import jwt from "jsonwebtoken";
import User from "../models/UserModels.js";


export const Register = async (req, res) => {
  const { email, password, confPassword, username } = req.body;

  // Validasi Request
  if (!email || !password || !confPassword || !username) {
    return res
      .status(400)
      .json({ success: false, msg: "Semua field harus diisi" });
  }

  // Konfirmasi Password
  if (password !== confPassword) {
    return res
      .status(400)
      .json({ success: false, msg: "Password tidak sesuai" });
  }

  try {
    // Validasi Email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, msg: "Email sudah digunakan" });
    }

    // Hash Password
    const hashPassword = await argon2.hash(password);

    // Buat pengguna baru
    const newUser = await User.create({
      email,
      password: hashPassword,
      username, 
    });

    return res
      .status(201)
      .json({ success: true, msg: "Registrasi Berhasil" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: error.message });
  }
};
export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: "Email dan Password harus diisi" });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });

    // If user not found, return 404
    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: "User tidak ditemukan" });
    }

    // Verify password with argon2
    const match = await argon2.verify(user.password, password);

    // If password doesn't match, return 400
    if (!match) {
      return res
        .status(400)
        .json({ success: false, msg: "Password salah" });
    }

    // Create JWT token
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    // Set JWT token in cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    // Return successful login response
    return res
      .status(200)
      .json({ success: true, msg: "Login berhasil", token: accessToken });
  } catch (error) {
    console.error("Login Error:", error);
    // Handle specific errors
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, msg: "Token tidak valid, mohon login kembali" });
    }
    // Handle other errors
    return res
      .status(500)
      .json({ success: false, msg: "Terjadi kesalahan pada server" });
  }
};
export const Me = async (req, res) => {
  try {
    // Mengambil token dari cookie
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res
        .status(401)
        .json({ success: false, msg: "Mohon Login dengan akun Anda" });
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    // Cari pengguna berdasarkan user_id yang didapat dari token
    const user = await User.findOne({
      attributes: ["id", "username", "email", "role"],
      where: {
        id: decoded.id,
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: "User tidak ditemukan" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res
        .status(401)
        .json({
          success: false,
          msg: "Token tidak valid, mohon login kembali",
        });
    }
    res
      .status(500)
      .json({ success: false, msg: "Terjadi kesalahan pada server" });
  }
};

export const LogOut = async (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ success: true, msg: "Logout berhasil" });
};
