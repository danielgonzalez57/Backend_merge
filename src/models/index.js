const { usersMergeSchema, UsersMerge } = require("./user.model");

function setupModels(sequelize) {
  UsersMerge.init(usersMergeSchema, UsersMerge.config(sequelize));
}

module.exports = setupModels;
