import express from 'express';
import { hapusUser, lihatSemuaUser, lihatUserById, tambahUser, updateUser } from '../controllers/User.js'; // Sesuaikan path dengan struktur aplikasi Anda

const router = express.Router();

// Endpoint untuk menambahkan user baru
router.post('/users',tambahUser);

// Endpoint untuk melihat semua user
router.get('/users', lihatSemuaUser);

// Endpoint untuk melihat detail user berdasarkan ID
router.get('/users/:id', lihatUserById);

// Endpoint untuk mengupdate user berdasarkan ID
router.patch('/users/:id', updateUser);

// Endpoint untuk menghapus user berdasarkan ID
router.delete('/users/:id', hapusUser);

export default router;
