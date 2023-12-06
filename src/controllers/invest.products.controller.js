const { where } = require("sequelize");
const sequelize = require("../config/conexion");

const getInvesProducts = async () => {
  let rta = await sequelize.models.modelInvestProductosMerge.findAll();
  return rta;
};

// FILTRAR DATA 2
async function dataInvProdFilter(user) {
  const query = await sequelize.models.modelInvestProductosMerge.findAll({
    where: {
      user_crea : user,
   }, 
  });

  return query;
}
// FILTRAR DATA 3
async function dataInvProdFilterDos(idMedicion) {
  const query = await sequelize.models.modelInvestProductosMerge.findAll({
    where: {
      id_medicion : idMedicion,
   }, 
  });

  return query;
}

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