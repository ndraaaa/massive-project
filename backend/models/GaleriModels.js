import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Galeri = db.define('galeri', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  judul: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isi: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  foto: {
    type: DataTypes.STRING // Simpan path file foto di sini
  },
  video: {
    type: DataTypes.STRING // Simpan path file video di sini
  },
  tanggal_Publikasi: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW // Tanggal pembentukan komunitas
  },
  status: {
    type: DataTypes.TEXT,
    defaultValue: 'publish', // Hanya status publish
    allowNull: false
  }
},
{
    freezeTableName: true,
  }
);

export default Galeri;
