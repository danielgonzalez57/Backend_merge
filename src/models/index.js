const { usersMergeSchema, UsersMerge } = require("./user.model");
const { invesMergeSchema, InvesMerge } = require("./investigacionDos.model");
const { articuloMergeSchema, MaestroArticuloMerge } = require("./articulo.model");


function setupModels(sequelize) {
  UsersMerge.init(usersMergeSchema, UsersMerge.config(sequelize));
  InvesMerge.init(invesMergeSchema, InvesMerge.config(sequelize));
  MaestroArticuloMerge.init(articuloMergeSchema, MaestroArticuloMerge.config(sequelize));
}

module.exports = setupModels;
