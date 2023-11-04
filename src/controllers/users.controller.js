const sequelize = require("../config/conexion");

const createUser = async (objectUser) => {
  let user = objectUser;
  user.login = objectUser.email;
  user.estatus = "activo1";
  user.user_crea = objectUser.nombre;

  let rta = await sequelize.models.modelUsuariosMerge.create(user);
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
