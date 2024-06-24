import jwt from "jsonwebtoken";
import Users from "../models/UserModels.js";

export const verifyToken = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(401).json({ msg: "Mohon Login dengan akun Anda" });
        }

        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        const user = await Users.findOne({
            where: {
                id: decoded.id
            }
        });

        if (!user) {
            return res.status(404).json({ msg: "User tidak ditemukan" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ msg: "Token tidak valid, mohon login kembali" });
        }
        res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Middleware untuk memeriksa peran admin
export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Akses terlarang, hanya admin yang bisa mengakses.' });
    }
    next();
};
