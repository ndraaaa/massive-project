import { Sequelize } from 'sequelize';
import sequelize from '../config/Database.js';

const { DataTypes } = Sequelize;

const Donasi = sequelize.define('Donasi', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  no_telp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});

export default Donasi;
