import express from 'express';
import multer from 'multer';
import { detailKomunitas, hapusKomunitas, lihatSemuaKomunitas, tambahKomunitas, updateKomunitas } from '../controllers/Komunitas.js';
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


router.post('/komunitas', upload.fields([{ name: 'foto' }, { name: 'video' }]), verifyToken, isAdmin,tambahKomunitas);
router.get('/komunitas', lihatSemuaKomunitas);
router.get('/komunitas/:id', detailKomunitas);
router.patch('/komunitas/:id', upload.fields([{ name: 'foto' }, { name: 'video' }]),verifyToken, isAdmin, updateKomunitas);
router.delete('/komunitas/:id',verifyToken, isAdmin, hapusKomunitas);

export default router;
