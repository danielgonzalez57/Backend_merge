const sequelize = require("../config/conexion");

// OBTENER DATA
const articuloAll = async () => {

    const rta = await sequelize.models.modelArticuloMerge.findAll();

    return rta;
  
  };

// FILTRAR DATA
async function articuloFilter(id) {
    const query = await sequelize.models.modelArticuloMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }


// CREAR
async function articuloCreated(datosDeFormulario) {
  const objectodeArticulo = datosDeFormulario
  const query = await sequelize.models.modelArticuloMerge.create(objectodeArticulo);

  return query;
}
  

// ACTUALIZAR
async function articuloUpdate(datosDeFormularioUpdate, id) {

  const objectodeArticulo = datosDeFormularioUpdate;
  

  const query = await sequelize.models.modelArticuloMerge.update(objectodeArticulo,{
      where: {id: id},
    });

  return query;
}


// ELIMINAR DATA
async function articuloDelete(id) {
  const query = await sequelize.models.modelArticuloMerge.destroy({
    where: {
      id: id,
    },
  });

  return query;
}


module.exports = { 
    articuloAll, 
    articuloFilter,
    articuloCreated,
    articuloUpdate,
    articuloDelete
};