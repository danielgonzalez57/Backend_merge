const { usersMergeSchema, UsersMerge } = require("./user.model");
const { investigacionMergeSchema, investigacionMerge } = require("./investigacion.model");
const { invesMergeSchema, InvesMerge } = require("./investigacionDos.model");

function setupModels(sequelize) {
  UsersMerge.init(usersMergeSchema, UsersMerge.config(sequelize));
  // investigacionMerge.init(investigacionMergeSchema, investigacionMerge.config(sequelize));
  InvesMerge.init(invesMergeSchema, InvesMerge.config(sequelize));
}

module.exports = setupModels;
