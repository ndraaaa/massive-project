import { Sequelize } from 'sequelize';
import sequelize from '../config/Database.js';

const { DataTypes } = Sequelize;
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
          notEmpty: false
      }
  },
  role: {
    type: DataTypes.ENUM('admin'),
    defaultValue: 'admin'
  }
});

export default User;
