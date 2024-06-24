import express from 'express';
import { LogOut, Login, Me, Register } from '../controllers/Auth.js';

const router = express.Router();

router.post("/register", Register);
router.post('/login', Login);
router.get('/me', Me);
router.delete('/logout', LogOut);
export default router;
// route controllers