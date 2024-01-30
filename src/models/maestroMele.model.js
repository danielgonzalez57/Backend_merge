// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "dim_MAESTRO_MELE";
const modelName = "modelMaestroMeleMerge";

const maestroMeleMergeSchema = {
    
  id:{
    type: DataTypes.STRING(100),
    primaryKey: true
  },
  codigo_sap:{
    allowNull: true,
    type: DataTypes.STRING(100),
  },
  nombre: {
    allowNull: true,
    type: DataTypes.STRING(200),
  },
  clasificacion: {
    allowNull: true,
    type: DataTypes.STRING(100),
  },
  marca: {
    allowNull: true,
    type: DataTypes.STRING(100),
  }
};

class MaestroMeleMerge extends Model {
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
  maestroMeleMergeSchema,
  MaestroMeleMerge
};