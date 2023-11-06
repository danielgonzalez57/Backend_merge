const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "dim_TIPO_ART_MERGE";
const modelName = "modelTipoArticuloMerge";

const maestroTiendaMergeSchema = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      id_articulo: {
        allowNull: true,
        type: DataTypes.INTEGER(70),
      },
      latitud: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      longitud: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      tipo_tienda: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      user_crea: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      user_mod: {
        type: DataTypes.STRING(100),
        allowNull: true,
      }
};

class MaestroTiendaMerge extends Model {
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
  maestroTiendaMergeSchema,
  MaestroTiendaMerge,
};
