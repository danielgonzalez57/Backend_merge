const { Sequelize, Model, DataTypes } = require("sequelize");

// CONEXION A LA BASE DE DATOS
const sequelize = require("../config/conexion");

class Medicion extends Model {}

Medicion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_invest: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hora: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nro_visitantes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nro_facturas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_crea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_mod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: "fec_crea",
    updatedAt: "fec_mod",
    sequelize,
    modelName: "fat_INVES_MEDICION_D",
  }
);

module.exports = Medicion;
