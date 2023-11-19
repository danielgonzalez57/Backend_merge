const sequelize = require("../config/conexion");

// GET DE LA TABLA CIUDADES
const getCiudades = async () => {
    let rta = await sequelize.query(`SELECT Id, nombre FROM dim_CIUDAD_MERGE`);
    return rta;
  };

const getUser = async () => {
    let rta = await sequelize.query(`SELECT * FROM dim_USUARIOS_MERGE`);
    return rta;
  };

  module.exports = {
    getCiudades,
    getUser
  };
