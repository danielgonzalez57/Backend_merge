const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "dim_TAM_CAP_MERGE";
const modelName = "modelTamCapMerge";

const tamCapMergeSchema = {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      id_tipo: {
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

class TamCapMerge extends Model {
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
  tamCapMergeSchema,
  TamCapMerge,
};
