const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "dim_MODELO_MERGE";
const modelName = "modelModeloMerge";

const modeloMergeSchema = {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      id_tam_cap: {
        allowNull: true,
        type: DataTypes.INTEGER(70),
      },
      user_crea: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      user_mod: {
        type: DataTypes.STRING(100),
        allowNull: true,
      }
};

class ModeloMerge extends Model {
  static associate() {
    // associate
 }

  static config(sequelize) {
    return {
      sequelize,
      tableName: tableName,
      modelName: modelName,
      createdAt: "fec_crea",
      updatedAt: "fec_mod"
    };
  }
}

module.exports = {
  tableName,
  modeloMergeSchema,
  ModeloMerge,
};
