const { where } = require("sequelize");
const sequelize = require("../config/conexion");

const getInvesProducts = async () => {
  let rta = await sequelize.models.modelInvestProductosMerge.findAll();
  return rta;
};

const getInvesProductsId = async (id) => {
  let rta = await sequelize.models.modelInvestProductosMerge.findOne({where: { Id: id }});
  return rta;
};

const deleteInvesProducts = async (id) => {
  let rta = await sequelize.models.modelInvestProductosMerge.destroy({where: { Id: id }});
  return rta;
};

// DEBUG CONTROLLERS
const investProductsJson = {
  Id:"1",
  id_medicion:"2",
  id_art:"3",
  id_tipo:"4",
  id_tam_cap:"5",
  id_marca:"6",
  id_modelo:"7",
  descrip:"ESTO ES UN DATO DE PRUEBA",
  cant:"8",
  precio:"100",
  sub_total:"116",
  cod_sim_daka:"LB-00000001",
  user_crea:"DILAN MARCANO GONZALEZ",
  user_mod:"DILAN MARCANO GONZALEZ",
  createdAt:"2023-11-08 10:24:15"
}

const createInvestProducts = async (json) => {
  let rta = await sequelize.models.modelInvestProductosMerge.create(json);
  return rta;
};

//createInvestProducts(investProductsJson);

module.exports = {
  getInvesProducts,
  getInvesProductsId,
  deleteInvesProducts,
  createInvestProducts
};