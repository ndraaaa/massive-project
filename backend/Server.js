import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import db from "./config/Database.js";
import artikelRoutes from './routes/ArtikelRoute.js';
import authRoutes from './routes/AuthRoute.js';
import donasiRoutes from './routes/DonasiRoute.js';
import galeriRoutes from './routes/GaleriRoute.js';
import komunitasRoutes from './routes/KomunitasRoute.js';
import userRoutes from './routes/UserRoute.js';
dotenv.config();

const app = express();

// (async()=>{
//     await db.sync();
// })();



app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1> API BERITA </h1>
    <p>SELAMAT DATANG DI PROJECT KITA</p>`);
});


// Gunakan routes
app.use('/api', artikelRoutes); 
// app.use('./uploads',express.static('uploads'))
app.use('/api', userRoutes);
app.use('/api', donasiRoutes); // Donasi routes
app.use('/api', galeriRoutes); // Galeri routes
app.use('/api', komunitasRoutes); // Komunitas routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});