const sequelize = require("../config/conexion");

// OBTENER DATA
const modeloAll = async () => {

    const rta = await sequelize.models.modelModeloMerge.findAll();
    return rta;
  
  };

// FILTRAR DATA
async function modeloFilter(id) {
    const query = await sequelize.models.modelModeloMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }
// FILTRAR DATA
async function modeloFilterBuscador(nombre) {
    const query = await sequelize.models.modelModeloMerge.findOne({
      where: {
        nombre: nombre,
      },
    });
  
    return query;
  }

// FILTRAR DATA
async function modeloFilterSelect(id) {
    const query = await sequelize.models.modelModeloMerge.findAll({
      where: {
        id_tam_cap: id,
      },
    });
  
    return query;
  }

// CREAR DATA
const modeloCrear = async (objectInvestigacion) => {

  const investigacionNew = objectInvestigacion;

  let rta = await sequelize.models.modelModeloMerge.create(investigacionNew);
  return rta;

};

// ACTUALIZAR
async function modeloUpdate(objectInvestigacionUpdate, id) {

    const investigacionNew = objectInvestigacionUpdate;
    

    const query = await sequelize.models.modelModeloMerge.update(investigacionNew,{
        where: {id: id},
      });
  
    return query;
  }
  
// ELIMINAR DATA
async function modeloDelete(id) {
    const query = await sequelize.models.modelModeloMerge.destroy({
      where: {
        id: id,
      },
    });
  
    return query;
  }
  

module.exports = { 
    modeloAll,
    modeloCrear,
    modeloFilter,
    modeloUpdate,
    modeloDelete, 
    modeloFilterSelect,
    modeloFilterBuscador
};