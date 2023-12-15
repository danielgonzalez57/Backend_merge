const sequelize = require("../config/conexion");

// OBTENER DATA
const modeloAll = async () => {

    const rta = await sequelize.models.modelModeloMerge.findAll();
    return rta;
  
  };

// OBTENER DATA
const modeloAllJoins = async () => {

  const rta = await sequelize.query(
    `select t0.id, 
    t0.nombre,  
    t1.nombre as id_tam_cap,
    t2.nombre as id_marca,
    t0.user_crea, 
    t0.user_mod,
    t0.fec_crea, 
    t0.fec_mod
    from dkval_Merge.dim_MODELO_MERGE t0
    left join dkval_Merge.dim_TAM_CAP_MERGE t1 ON t0.id_tam_cap = t1.id
    left join dkval_Merge.dim_MARCAS_MERGE t2 ON t0.id_marca = t2.id
    `
  );
    return rta;
  
  };

// FILTRAR DATA
async function modeloFilter(id) {
    const query = await sequelize.models.modelModeloMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }
// FILTRAR DATA
async function modeloFilterBuscador(nombre) {
    const query = await sequelize.models.modelModeloMerge.findOne({
      where: {
        nombre: nombre,
      },
    });
  
    return query;
  }

// FILTRAR DATA
async function modeloFilterSelect(id) {
    const query = await sequelize.models.modelModeloMerge.findAll({
      where: {
        id_tam_cap: id,
      },
    });
  
    return query;
  }

// CREAR DATA
const modeloCrear = async (objectInvestigacion) => {

  const investigacionNew = objectInvestigacion;

  let rta = await sequelize.models.modelModeloMerge.create(investigacionNew);
  return rta;

};

// ACTUALIZAR
async function modeloUpdate(objectInvestigacionUpdate, id) {

    const investigacionNew = objectInvestigacionUpdate;
    

    const query = await sequelize.models.modelModeloMerge.update(investigacionNew,{
        where: {id: id},
      });
  
    return query;
  }
  
// ELIMINAR DATA
async function modeloDelete(id) {
    const query = await sequelize.models.modelModeloMerge.destroy({
      where: {
        id: id,
      },
    });
  
    return query;
  }
  

module.exports = { 
    modeloAll,
    modeloCrear,
    modeloFilter,
    modeloUpdate,
    modeloDelete, 
    modeloFilterSelect,
    modeloFilterBuscador,
    modeloAllJoins
};