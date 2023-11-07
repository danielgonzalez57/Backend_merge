const sequelize = require("../config/conexion");

// OBTENER DATA
const maestroTiendaAll = async () => {

    const rta = await sequelize.models.modelMaestroTiendaMerge.findAll();

    return rta;
  
  };

// FILTRAR DATA
async function maestroTiendaFilter(id) {
    const query = await sequelize.models.modelMaestroTiendaMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }

// CREAR DATA
const createMaestroTienda = async (objectMaestroTienda) => {

  const maestroTiendaNew = objectMaestroTienda;

  let rta = await sequelize.models.modelMaestroTiendaMerge.create(maestroTiendaNew);

  return rta;

};

// ACTUALIZAR
async function maestroTiendaUpdate(objectMaestroTiendaUpdate, id) {

    const maestroTiendaNew = objectMaestroTiendaUpdate;
    

    const query = await sequelize.models.modelMaestroTiendaMerge.update(maestroTiendaNew,{
        where: {id: id},
      });
  
    return query;
  }
  
// ELIMINAR DATA
async function maestroTiendaDelete(id) {
    const query = await sequelize.models.modelMaestroTiendaMerge.destroy({
      where: {
        id: id,
      },
    });
  
    return query;
  }
  

module.exports = { 
    maestroTiendaAll, 
    createMaestroTienda,
    maestroTiendaFilter,
    maestroTiendaUpdate,
    maestroTiendaDelete
};