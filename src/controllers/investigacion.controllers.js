const sequelize = require("../config/conexion");

// OBTENER DATA
const investigacionAll = async () => {

    const rta = await sequelize.models.modelInvesMerge.findAll();

    return rta;
  
  };

// FILTRAR DATA
async function investigacionFilter(id) {
    const query = await sequelize.models.modelInvesMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }

// CREAR DATA
const createInvestigacion = async (objectInvestigacion) => {

  const investigacionNew = objectInvestigacion;

  let rta = await sequelize.models.modelInvesMerge.create(investigacionNew);
  return rta;

};

// ACTUALIZAR
async function investigacionUpdate(objectInvestigacionUpdate, id) {

    const investigacionNew = objectInvestigacionUpdate;
    

    const query = await sequelize.models.modelInvesMerge.update(investigacionNew,{
        where: {id: id},
      });
  
    return query;
  }
  
// ELIMINAR DATA
async function investigacionDelete(id) {
    const query = await sequelize.models.modelInvesMerge.destroy({
      where: {
        id: id,
      },
    });
  
    return query;
  }
  

module.exports = { investigacionAll, 
                    createInvestigacion, 
                    investigacionFilter,
                    investigacionUpdate,
                    investigacionDelete
};