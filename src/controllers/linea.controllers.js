const sequelize = require("../config/conexion");

// OBTENER DATA
const lineaAll = async () => {

    const rta = await sequelize.models.modelLineaMerge.findAll();

    return rta;
  };

// FILTRAR DATA
async function lineaFilter(id) {
    const query = await sequelize.models.modelLineaMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }


//CREAR
async function lineaCreated(datosDeFormulario) {
  const objectodeLinea = datosDeFormulario
  const query = await sequelize.models.modelLineaMerge.create(objectodeLinea);

  return query;
}
  

// ACTUALIZAR
async function lineaUpdate(datosDeFormularioUpdate, id) {

  const objectodeLinea = datosDeFormularioUpdate;
  

  const query = await sequelize.models.modelLineaMerge.update(objectodeLinea,{
      where: {id: id},
    });

  return query;
}


// ELIMINAR DATA
async function lineaDelete(id) {
  const query = await sequelize.models.modelLineaMerge.destroy({
    where: {
      id: id,
    },
  });

  return query;
}


module.exports = { 
    lineaAll, 
    lineaFilter,
    lineaCreated,
    lineaUpdate,
    lineaDelete
};