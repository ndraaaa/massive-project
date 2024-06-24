import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Artikel = db.define('artikel', {
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
    defaultValue: Sequelize.NOW // Waktu publikasi artikel
  },
  status: {
    type: DataTypes.ENUM('draft', 'publish'),
    defaultValue: 'draft'
  },
},
{
    freezeTableName: true,
  });

export default Artikel;
