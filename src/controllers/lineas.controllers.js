const sequelize = require("../config/conexion");

// GET DE LA TABLA CIUDADES
const getLineas = async () => {
    let rta = await sequelize.query(`SELECT Id, nombre FROM dim_LINEA_MERGE`);
    return rta;
  };

const getUser = async () => {
    let rta = await sequelize.query(`SELECT * FROM dim_USUARIOS_MERGE`);
    return rta;
  };

  module.exports = {
    getLineas,
    getUser
  };
