const sequelize = require("../config/conexion");

// OBTENER DATA
const tipoArticuloAll = async () => {

    const rta = await sequelize.models.modelTipoArticuloMerge.findAll();

    return rta;
  
  };

// FILTRAR DATA
async function tipoArticuloFilter(id) {
    const query = await sequelize.models.modelTipoArticuloMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }

// CREAR DATA
const tipoArticuloCrear = async (objectInvestigacion) => {

  const investigacionNew = objectInvestigacion;

  let rta = await sequelize.models.modelTipoArticuloMerge.create(investigacionNew);
  return rta;

};

// ACTUALIZAR
async function tipoArticuloUpdate(objectInvestigacionUpdate, id) {

    const investigacionNew = objectInvestigacionUpdate;
    

    const query = await sequelize.models.modelTipoArticuloMerge.update(investigacionNew,{
        where: {id: id},
      });
  
    return query;
  }
  
// ELIMINAR DATA
async function tipoArticuloDelete(id) {
    const query = await sequelize.models.modelTipoArticuloMerge.destroy({
      where: {
        id: id,
      },
    });
  
    return query;
  }
  

module.exports = { 
    tipoArticuloAll,
    tipoArticuloCrear,
    tipoArticuloFilter,
    tipoArticuloUpdate,
    tipoArticuloDelete
};