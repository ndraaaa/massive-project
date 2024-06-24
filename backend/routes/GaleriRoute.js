import express from 'express';
import multer from 'multer';
import { detailGaleri, hapusGaleri, lihatGaleri, tambahGaleri, updateGaleri } from '../controllers/Galeri.js';
import { isAdmin, verifyToken } from '../midllaware/Auth.js';
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Menentukan folder penyimpanan file
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Menentukan nama file yang disimpan
  }
});

const upload = multer({ storage: storage });

router.post('/galeri', upload.fields([{ name: 'foto' }, { name: 'video' }]), verifyToken, isAdmin, tambahGaleri);
router.get('/galeri', lihatGaleri);
router.get('/galeri/:id', detailGaleri);
router.patch('/galeri/:id', upload.fields([{ name: 'foto' }, { name: 'video' }]), verifyToken, isAdmin, updateGaleri);
router.delete('/galeri/:id', verifyToken, isAdmin, hapusGaleri);

export default router;
