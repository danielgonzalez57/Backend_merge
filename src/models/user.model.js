// TABLA EO_PERSONA- PERSONAS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "dim_USUARIOS_MERGE";
const modelName = "modelUsuariosMerge";

const usersMergeSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(70),
  },
  login: {
    allowNull: true,
    type: DataTypes.STRING(70),
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  estatus: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  rol: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  password: {
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

class UsersMerge extends Model {
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
  usersMergeSchema,
  UsersMerge,
};
