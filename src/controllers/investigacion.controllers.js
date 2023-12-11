const sequelize = require("../config/conexion");

// OBTENER DATA
const investigacionAll = async () => {

  let rta = await sequelize.query(`
  SELECT t0.id,
  fecha,
  t1.nombre as id_tienda, 
  motivo,
  investigador, 
  t0.user_crea, 
  t0.user_mod, 
  t0.createdAt, 
  t0.updatedAt
  FROM dkval_Merge.fat_INVES_MERGE t0
  LEFT JOIN dkval_Merge.dim_TIENDAS_MERGE t1 on t0.id_tienda = t1.id`)

  return rta[0];
  
  };
// const investigacionAll = async () => {

//     const rta = await sequelize.models.modelInvesMerge.findAll();

//     return rta;
  
//   };

// FILTRAR DATA
async function investigacionFilter(id) {
  let rta = await sequelize.query(`
  SELECT t0.id as id,
  fecha,
  t1.nombre as id_tienda, 
  motivo,
  investigador, 
  t0.user_crea, 
  t0.user_mod, 
  t0.createdAt, 
  t0.updatedAt
  FROM dkval_Merge.fat_INVES_MERGE t0
  LEFT JOIN dkval_Merge.dim_TIENDAS_MERGE t1 on t0.id_tienda = t1.id
  WHERE t0.id = '${id}'`);
  return rta[0];
  }

// FILTRAR DATA
async function dataUSerFilter(user) {
  let rta = await sequelize.query(`
  SELECT t0.id,
  fecha,
  t1.nombre as id_tienda, 
  motivo,
  investigador, 
  t0.user_crea, 
  t0.user_mod, 
  t0.createdAt, 
  t0.updatedAt
  FROM dkval_Merge.fat_INVES_MERGE t0
  LEFT JOIN dkval_Merge.dim_TIENDAS_MERGE t1 on t0.id_tienda = t1.id
  WHERE t0.user_crea = '${user}'`);
  return rta[0];
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
  

module.exports = { 
  investigacionAll, 
  createInvestigacion, 
  investigacionFilter,
  investigacionUpdate,
  investigacionDelete,
  dataUSerFilter
};