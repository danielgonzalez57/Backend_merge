const sequelize = require("../config/conexion");

// OBTENER DATA
const marcasAll = async () => {

    const rta = await sequelize.models.modelMarcaMerge.findAll();

    return rta;
  };

// FILTRAR DATA
async function marcasFilter(id) {
    const query = await sequelize.models.modelMarcaMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }


//CREAR
async function marcasCreated(datosDeFormulario) {
  
  const objectodeMarcas = datosDeFormulario
  const query = await sequelize.models.modelMarcaMerge.create(objectodeMarcas);

  return query;
}
  

// ACTUALIZAR
async function marcasUpdate(datosDeFormularioUpdate, id) {

  const objectodeMarcas = datosDeFormularioUpdate;
  

  const query = await sequelize.models.modelMarcaMerge.update(objectodeMarcas,{
      where: {id: id},
    });

  return query;
}


// ELIMINAR DATA
async function marcaDelete(id) {
  const query = await sequelize.models.modelMarcaMerge.destroy({
    where: {
      id: id,
    },
  });

  return query;
}


module.exports = { 
    marcasAll, 
    marcasFilter,
    marcasCreated,
    marcasUpdate,
    marcaDelete
};