import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Komunitas = db.define('komunitas', {
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
    type: DataTypes.STRING 
  },
  video: {
    type: DataTypes.STRING 
  },
  tanggal_Publikasi: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'publish',
    allowNull: false
  }
},
{
    freezeTableName: true,
  });

export default Komunitas;
