import express from 'express';
import multer from 'multer';
import { hapusArtikel, lihatArtikel, lihatArtikelByid, tambahArtikel, updateArtikel } from '../controllers/Artikel.js';
import { isAdmin, verifyToken } from '../midllaware/Auth.js';

const router = express.Router();

// Konfigurasi Multer untuk menyimpan file di disk
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Menentukan folder penyimpanan file
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Menentukan nama file yang disimpan
    }
});

const upload = multer({ storage: storage });

router.post('/artikel', upload.fields([{ name: 'foto' }, { name: 'video' }]),verifyToken, isAdmin, tambahArtikel);
router.get('/artikel', lihatArtikel);
router.get('/artikel/:id', lihatArtikelByid );
router.patch('/artikel/:id', upload.fields([{ name: 'foto' }, { name: 'video' }]),verifyToken, isAdmin, updateArtikel);
router.delete('/artikel/:id', verifyToken, isAdmin, hapusArtikel);

export default router;
