const sequelize = require("../config/conexion");

const Medicion = require("../models/medicion.model");

// VER DATA
async function medicionAll() {
  const query = await sequelize.models.fat_INVES_MEDICION_D.findAll();
  return query;
}

// FILTRAR DATA
async function medicionFilter(id) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.findOne({
    where: {
      id: id,
    },
  });

  return query;
}

// CREAR
async function medicionCreated(
  id_invest,
  hora,
  nro_visitantes,
  nro_facturas,
  user_crea,
  user_mod
) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.create({
    id_invest: id_invest,
    hora: hora,
    user_crea: user_crea,
    user_mod: user_mod,
    nro_visitantes: nro_visitantes,
    nro_facturas: nro_facturas,
  });

  return query;
}
// ACTUALIZAR
async function medicionUpdate(
  id,
  id_invest,
  hora,
  nro_visitantes,
  nro_facturas,
  user_crea,
  user_mod
) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.update(
    {
      id_invest: id_invest,
      hora: hora,
      user_crea: user_crea,
      user_mod: user_mod,
      nro_visitantes: nro_visitantes,
      nro_facturas: nro_facturas,
    },
    {
      where: {
        id: id,
      },
    }
  );

  return query;
}

// ELIMINAR DATA
async function medicionDelete(id) {
  const query = await sequelize.models.fat_INVES_MEDICION_D.destroy({
    where: {
      id: id,
    },
  });

  return query;
}

module.exports = {
  medicionAll,
  medicionCreated,
  medicionFilter,
  medicionUpdate,
  medicionDelete,
};
