const sequelize = require("../config/conexion");

const createUser = async () => {
  let rta = await sequelize.models.modelUsuariosMerge.create({
    nombre: "alicedev94",
    login: "alicedev94@gmail.com",
    email: "alicedev94@gmail.com",
    password: "123456",
    rol: "admin",
    estatus: "activo",
    user_crea: "alicedev94",
  });

  // nombre: "alicedev94",
  // login: "alicedev94@gmail.com",
  // email: "alicedev94@gmail.com",
  // password: "123456",
  // rol: "admin",
  // estatus: "activo",
  // user_crea: "alicedev94",

  return rta;
};

const getUser = async () => {
  let rta = await sequelize.query(`SELECT * FROM dim_USUARIOS_MERGE`);
  return rta;
};

const getUserWithEmail = async (username) => {
  let rta = await sequelize.query(`SELECT * FROM dim_USUARIOS_MERGE WHERE login = '${username}' LIMIT 1`);
  return rta;
};

module.exports = { createUser, getUserWithEmail, getUser };
