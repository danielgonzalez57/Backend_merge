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
    unique: {
      msg: 'El email ya está registrado en la base de datos'
    },
    validate: {
      isEmail: {
        msg: 'Agrega un correo válido'
      },
      notEmpty: {
        msg: 'Favor ingrese un correo electrónico'
      }
    }
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
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      passwordEqualPassword2: function(value) {
        if (value !== this.password2) {
          throw new Error("Las contraseñas no coinciden.!");
        }
      }
    }
  },
  password2: {
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
