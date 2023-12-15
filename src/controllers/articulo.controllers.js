const sequelize = require("../config/conexion");

// OBTENER DATA
const articuloAll = async () => {

    const rta = await sequelize.models.modelArticuloMerge.findAll();

    return rta;
  
  };

const articuloAllJoin = async () => {

    const rta = await sequelize.query(
      `select t0.id, 
      t0.nombre,  
      t1.nombre as id_linea,
      t0.user_crea, 
      t0.user_mod,
      t0.fec_crea, 
      t0.fec_mod
      from dkval_Merge.dim_ARTICULO_MERGE t0
      left join dkval_Merge.dim_LINEA_MERGE t1 ON t0.id_linea = t1.id`
    );

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
    articuloDelete,
    articuloAllJoin
};