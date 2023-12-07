const { where } = require("sequelize");
const sequelize = require("../config/conexion");

// const getInvesProducts = async () => {
//   let rta = await sequelize.models.modelInvestProductosMerge.findAll();
//   return rta;
// };

const getInvesProducts = async () => {
  let rta = await sequelize.query(`
  SELECT t0.Id, 
  t0.id_medicion,
  t1.nombre as id_art ,
  t2.nombre as id_tipo,
  t3.nombre  as id_tam_cap,
  t4.nombre  as id_marca,
  t5.nombre as id_modelo,
  t0.descrip, 
  t0.cant, 
  t0.precio,
  t0.sub_total, 
  t0.cod_sim_daka, 
  t0.user_crea, 
  t0.user_mod, 
  t0.createdAt, 
  t0.updatedAt 
  FROM dkval_Merge.fat_INVEST_PRODUCTOS_MERGE t0
  LEFT JOIN dkval_Merge.dim_ARTICULO_MERGE t1 on t0.id_art = t1.id 
  LEFT JOIN  dkval_Merge.dim_TIPO_ART_MERGE t2 on t0.id_tipo = t2.id 
  LEFT JOIN  dkval_Merge.dim_TAM_CAP_MERGE t3 on t0.id_tam_cap = t3.id 
  LEFT JOIN  dkval_Merge.dim_MARCAS_MERGE t4 on t0.id_marca = t4.id
  LEFT JOIN  dkval_Merge.dim_MODELO_MERGE t5 on t0.id_modelo  = t5.id'`)
  return rta[0];
};

const dataInvProdFilter = async (user) => {
  let rta = await sequelize.query(`
  SELECT t0.Id, 
  t0.id_medicion,
  t1.nombre as id_art ,
  t2.nombre as id_tipo,
  t3.nombre  as id_tam_cap,
  t4.nombre  as id_marca,
  t5.nombre as id_modelo,
  t0.descrip, 
  t0.cant, 
  t0.precio,
  t0.sub_total, 
  t0.cod_sim_daka, 
  t0.user_crea, 
  t0.user_mod, 
  t0.createdAt, 
  t0.updatedAt 
  FROM dkval_Merge.fat_INVEST_PRODUCTOS_MERGE t0
  LEFT JOIN dkval_Merge.dim_ARTICULO_MERGE t1 on t0.id_art = t1.id 
  LEFT JOIN  dkval_Merge.dim_TIPO_ART_MERGE t2 on t0.id_tipo = t2.id 
  LEFT JOIN  dkval_Merge.dim_TAM_CAP_MERGE t3 on t0.id_tam_cap = t3.id 
  LEFT JOIN  dkval_Merge.dim_MARCAS_MERGE t4 on t0.id_marca = t4.id
  LEFT JOIN  dkval_Merge.dim_MODELO_MERGE t5 on t0.id_modelo  = t5.id
  WHERE t0.user_crea = '${user}'`); // <= parameter model here (TV32-SV3100)
  return rta[0];
};

// FILTRAR DATA 2
// async function dataInvProdFilter(user) {
//   const query = await sequelize.models.modelInvestProductosMerge.findAll({
//     where: {
//       user_crea : user,
//    }, 
//   });

//   return query;
// }
// FILTRAR DATA 3
async function dataInvProdFilterDos(idMedicion) {
  let rta = await sequelize.query(`
  SELECT t0.Id, 
  t0.id_medicion,
  t1.nombre as id_art ,
  t2.nombre as id_tipo,
  t3.nombre  as id_tam_cap,
  t4.nombre  as id_marca,
  t5.nombre as id_modelo,
  t0.descrip, 
  t0.cant, 
  t0.precio,
  t0.sub_total, 
  t0.cod_sim_daka, 
  t0.user_crea, 
  t0.user_mod, 
  t0.createdAt, 
  t0.updatedAt 
  FROM dkval_Merge.fat_INVEST_PRODUCTOS_MERGE t0
  LEFT JOIN dkval_Merge.dim_ARTICULO_MERGE t1 on t0.id_art = t1.id 
  LEFT JOIN  dkval_Merge.dim_TIPO_ART_MERGE t2 on t0.id_tipo = t2.id 
  LEFT JOIN  dkval_Merge.dim_TAM_CAP_MERGE t3 on t0.id_tam_cap = t3.id 
  LEFT JOIN  dkval_Merge.dim_MARCAS_MERGE t4 on t0.id_marca = t4.id
  LEFT JOIN  dkval_Merge.dim_MODELO_MERGE t5 on t0.id_modelo  = t5.id
  WHERE t0.id_medicion = '${idMedicion}'`); 
  return rta;
}
// async function dataInvProdFilterDos(idMedicion) {
//   const query = await sequelize.models.modelInvestProductosMerge.findAll({
//     where: {
//       id_medicion : idMedicion,
//    }, 
//   });

//   return query;
// }

const getInvesProductsId = async (id) => {
  let rta = await sequelize.models.modelInvestProductosMerge.findOne({where: { Id: id }});
  return rta;
};

const deleteInvesProducts = async (id) => {
  let rta = await sequelize.models.modelInvestProductosMerge.destroy({where: { Id: id }});
  return rta;
};



const invesProductCreated = async (json) => {
  let rta = await sequelize.models.modelInvestProductosMerge.create(json);
  return rta;
};

// ACTUALIZAR
async function investigacionProductUpdate(objectInvestigacionUpdate, id) {

  const investigacionNew = objectInvestigacionUpdate;
  

  const query = await sequelize.models.modelInvestProductosMerge.update(investigacionNew,{
      where: {id: id},
    });

  return query;
}

// consultas especifiacas de los buscadores by alicedev94

const searchModelInvestProduct = async (model) => {
  let rta = await sequelize.query(`
  SELECT t1.id  as id_Modelo

  , t2.id as Marca
  , t3.id as TamañoCap
  , t4.id as TipoArt
  , t5.id as Articulo 
  , t1.nombre as Modelo
  FROM dkval_Merge.dim_MODELO_MERGE t1
  INNER join dkval_Merge.dim_MARCAS_MERGE t2 ON t1.id_marca  = t2.id 
  INNER join dkval_Merge.dim_TAM_CAP_MERGE t3 ON t1.id_tam_cap = t3.id 
  INNER join dkval_Merge.dim_TIPO_ART_MERGE t4 ON t3.id_tipo = t4.id 
  INNER join dkval_Merge.dim_ARTICULO_MERGE t5 ON t4.id_articulo = t5.id
  WHERE t1.nombre = '${model}'`); // <= parameter model here (TV32-SV3100)
  console.log(rta[0]);
  return rta[0];
};

module.exports = {
  getInvesProducts,
  getInvesProductsId,
  deleteInvesProducts,
  invesProductCreated,
  investigacionProductUpdate,
  searchModelInvestProduct, 
  dataInvProdFilter,
  dataInvProdFilterDos
};