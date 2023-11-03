const { usersMergeSchema, UsersMerge } = require("./user.model");
const { investigacionMergeSchema, investigacionMerge } = require("./investigacion.model");

function setupModels(sequelize) {
  UsersMerge.init(usersMergeSchema, UsersMerge.config(sequelize));
  investigacionMerge.init(investigacionMergeSchema, investigacionMerge.config(sequelize));
}

module.exports = setupModels;
