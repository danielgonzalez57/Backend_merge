// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "fat_INVEST_PRODUCTOS_MERGE";
const modelName = "modelInvestProductosMerge";

const investProducMergeSchema = {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_medicion: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    id_art: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    id_tipo: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    id_tam_cap: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    id_marca: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    id_modelo: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    descrip: {
        allowNull: true,
        type: DataTypes.STRING(100),
    },
    cant: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    precio: {
        allowNull: true,
        type: DataTypes.FLOAT,
    },
    sub_total: {
        allowNull: true,
        type: DataTypes.FLOAT,
    },
    cod_sim_daka: {
        allowNull: true,
        type: DataTypes.STRING(100),
    },
    user_crea: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    user_mod: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
};

class InvestProductMerge extends Model {
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
  investProducMergeSchema,
  InvestProductMerge,
};