// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "dim_ESTADOS_MERGE";
const modelName = "modelEstadosMerge";

const estadosMergeSchema = {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    allowNull: true,
    type: DataTypes.STRING(100),
  },
  id_region: {
    allowNull: true,
    type: DataTypes.INTEGER(70),
  },
  id_pais: {
    allowNull: true,
    type: DataTypes.INTEGER(70),
  },
  user_crea: {
    allowNull: true,
    type: DataTypes.STRING(100),
  },
  user_mod: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
};

class MaestroEstadosMerge extends Model {
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
  estadosMergeSchema,
  MaestroEstadosMerge
};