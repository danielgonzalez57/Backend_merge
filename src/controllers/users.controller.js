const sequelize = require("../config/conexion");

const createUser = async (objectUser) => {
  let user = objectUser;


  //FORZAR A QUE DEN ERROR
  //user.id = 21;
  //----------------------

  // validar que el usuario no exista

  user.login = objectUser.email;
  user.estatus = "activo";
  user.user_crea = objectUser.nombre;

  let rta = await sequelize.models.modelUsuariosMerge.create(user);
  return rta;
};

const updateUser = async (objectUser) => {
  console.log(objectUser);
  let rta = await sequelize.query(
    `UPDATE dim_USUARIOS_MERGE SET nombre = '${objectUser.nombre}', email = '${objectUser.email}', password = '${objectUser.password}', rol = '${objectUser.rol}' WHERE ID = ${objectUser.id}`
  );
  return rta;8
};

const getUser = async () => {
  let rta = await sequelize.query(`SELECT * FROM dim_USUARIOS_MERGE`);
  return rta;
};

const getUserId = async (id) => {
  let rta = await sequelize.query(
    `SELECT * FROM dim_USUARIOS_MERGE WHERE ID = ${id}`
  );
  return rta;
};

const getUserWithEmail = async (username) => {
  let rta = await sequelize.query(
    `SELECT * FROM dim_USUARIOS_MERGE WHERE login = '${username}' LIMIT 1`
  );
  return rta;
};

const deleteUser = async (id) => {
  let rta = await sequelize.query(
    `DELETE FROM dim_USUARIOS_MERGE WHERE id = '${id}'`
  );
  return rta;
};

module.exports = {
  createUser,
  getUserWithEmail,
  getUser,
  getUserId,
  updateUser,
  deleteUser
};
