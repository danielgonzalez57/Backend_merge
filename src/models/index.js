const { usersMergeSchema, UsersMerge } = require("./user.model");
const { invesMergeSchema, InvesMerge } = require("./investigacionDos.model");
const { maestroTiendaMergeSchema, MaestroTiendaMerge } = require("./maestroTienda.model");
const { tipoArticuloMergeSchema, TipoArticuloMerge } = require("./tipoArticulo.model");

function setupModels(sequelize) {
  UsersMerge.init(usersMergeSchema, UsersMerge.config(sequelize));
  InvesMerge.init(invesMergeSchema, InvesMerge.config(sequelize));
  MaestroTiendaMerge.init(maestroTiendaMergeSchema, MaestroTiendaMerge.config(sequelize));
  TipoArticuloMerge.init(tipoArticuloMergeSchema, TipoArticuloMerge.config(sequelize));

}

module.exports = setupModels;
