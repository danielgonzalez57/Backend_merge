const sequelize = require("../config/conexion");

// OBTENER DATA
const tamCapAll = async () => {

    const rta = await sequelize.models.modelTamCapMerge.findAll();

    return rta;
  
  };

// FILTRAR DATA
async function tamCapFilter(id) {
    const query = await sequelize.models.modelTamCapMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }

// CREAR DATA
const tamCapCrear = async (objectInvestigacion) => {

  const investigacionNew = objectInvestigacion;

  let rta = await sequelize.models.modelTamCapMerge.create(investigacionNew);
  return rta;

};

// ACTUALIZAR
async function tamCapUpdate(objectInvestigacionUpdate, id) {

    const investigacionNew = objectInvestigacionUpdate;
    

    const query = await sequelize.models.modelTamCapMerge.update(investigacionNew,{
        where: {id: id},
      });
  
    return query;
  }
  
// ELIMINAR DATA
async function tamCapDelete(id) {
    const query = await sequelize.models.modelTamCapMerge.destroy({
      where: {
        id: id,
      },
    });
  
    return query;
  }
  

module.exports = { 
    tamCapAll,
    tamCapCrear,
    tamCapFilter,
    tamCapUpdate,
    tamCapDelete
};