import express from 'express';
import { hapusDonasi, lihatDonasiById, lihatSemuaDonasi, tambahDonasi, updateDonasi } from '../controllers/Donasi.js';

const router = express.Router();

// Route untuk menambahkan donasi baru
router.post('/donasi', tambahDonasi);

// Route untuk melihat semua donasi
router.get('/donasi', lihatSemuaDonasi);

// Route untuk melihat detail donasi berdasarkan ID
router.get('/donasi/:id', lihatDonasiById);

// Route untuk mengupdate donasi berdasarkan ID
router.put('/donasi/:id', updateDonasi);

// Route untuk menghapus donasi berdasarkan ID
router.delete('/donasi/:id', hapusDonasi);

export default router;
