const { Sequelize } = require("sequelize");
require("dotenv").config();
const setupModels = require("../models/index");

const sequelize = new Sequelize(
  process.env.BD_NOMBRE,
  process.env.DB_USER,
  process.env.BD_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: 3306,
  }
);

setupModels(sequelize);
// sequelize.sync();
//Dim_usuarios_merge.sync();

module.exports = sequelize;

//   PRUEBA DE CONEXIOn
//   async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         const query = await sequelize.query(`SELECT * FROM Agencia`);
//         console.log('Connection Establecida correctamente.');
//         console.log(query);
//     } catch (error) {
//         console.error('Todo Mal', error);
//     }
//   }
//   testConnection();
