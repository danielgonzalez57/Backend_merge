const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "fat_INVES_MERGE";
const modelName = "modelInvesMerge";

const invesMergeSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      id_tienda: {
        allowNull: true,
        type: DataTypes.INTEGER(70),
      },
      motivo: {
        allowNull: false,
        type: DataTypes.INTEGER(70),
      },
      investigador: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      user_crea: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      user_mod: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
};

class InvesMerge extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: tableName,
      modelName: modelName,
    };
  }
}

module.exports = {
  tableName,
  invesMergeSchema,
  InvesMerge,
};
