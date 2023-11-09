// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "dim_LINEA_MERGE";
const modelName = "modelLineaMerge";

const LineaMergeSchema = {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  cod_sap: {
    allowNull: false,
    type: DataTypes.STRING(20),
  },
  user_crea: {
    allowNull: true,
    type: DataTypes.STRING(100),
  },
  user_mod: {
    allowNull: true,
    type: DataTypes.STRING(100),
  },
};

class MaestroLineaMerge extends Model {
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
  LineaMergeSchema,
  MaestroLineaMerge
};