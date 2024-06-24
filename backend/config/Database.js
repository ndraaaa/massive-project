import { Sequelize } from "sequelize";

const db = new Sequelize("pedulink", "root", "", {
        host: "localhost",
        dialect: "mysql"
    });
    

const connectDB = async () => {
  try {
    await db.authenticate();
    console.log("Koneksi Ke Database MySQL Berhasil.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

export default db;
