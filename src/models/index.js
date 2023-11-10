const { usersMergeSchema, UsersMerge } = require("./user.model");
const { invesMergeSchema, InvesMerge } = require("./investigacionDos.model");
const { maestroTiendaMergeSchema, MaestroTiendaMerge } = require("./maestroTienda.model");
const { tipoArticuloMergeSchema, TipoArticuloMerge } = require("./tipoArticulo.model");
const { tamCapMergeSchema, TamCapMerge } = require("./tamCap.model");
const { modeloMergeSchema, ModeloMerge } = require("./modelo.model");
// CHRISTIAN
const { articuloMergeSchema, MaestroArticuloMerge } = require("./articulo.model");
const { MarcaMergeSchema, MaestroMarcaMerge } = require("./marca.model");
const { LineaMergeSchema, MaestroLineaMerge } = require("./linea.model");
// DILAN
const { investProducMergeSchema, InvestProductMerge } = require("./invest.productos.model");


function setupModels(sequelize) {

  UsersMerge.init(usersMergeSchema, UsersMerge.config(sequelize));
  InvesMerge.init(invesMergeSchema, InvesMerge.config(sequelize));
  MaestroTiendaMerge.init(maestroTiendaMergeSchema, MaestroTiendaMerge.config(sequelize));
  TipoArticuloMerge.init(tipoArticuloMergeSchema, TipoArticuloMerge.config(sequelize));
  TamCapMerge.init(tamCapMergeSchema, TamCapMerge.config(sequelize));
  ModeloMerge.init(modeloMergeSchema, ModeloMerge.config(sequelize));
  // CHRISTIAN
  MaestroArticuloMerge.init(articuloMergeSchema, MaestroArticuloMerge.config(sequelize));
  MaestroMarcaMerge.init(MarcaMergeSchema, MaestroMarcaMerge.config(sequelize));
  MaestroLineaMerge.init(LineaMergeSchema, MaestroLineaMerge.config(sequelize));
  // DILAN
  InvestProductMerge.init(investProducMergeSchema, InvestProductMerge.config(sequelize));
}

module.exports = setupModels;
