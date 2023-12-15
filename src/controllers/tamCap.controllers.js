const sequelize = require("../config/conexion");

// OBTENER DATA
const tamCapAll = async () => {

    const rta = await sequelize.models.modelTamCapMerge.findAll();

    return rta;
  
  };

// OBTENER DATA
const tamCapAllJoins = async () => {

  const rta = await sequelize.query(
    `select t0.id, 
    t0.nombre,  
    t1.nombre as id_tipo,
    t0.user_crea, 
    t0.user_mod,
    t0.fec_crea, 
    t0.fec_mod
    from dkval_Merge.dim_TAM_CAP_MERGE t0
    left join dkval_Merge.dim_TIPO_ART_MERGE t1 ON t0.id_tipo = t1.id`
  );

    return rta;
  
  };

// FILTRAR DATA
async function tamCapFilter(id) {
    const query = await sequelize.models.modelTamCapMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }
// FILTRAR DATA
async function tamCapFilterSelect(id) {
    const query = await sequelize.models.modelTamCapMerge.findAll({
      where: {
        id_tipo: id,
      },
    });
  
    return query;
  }

// CREAR DATA
const tamCapCrear = async (objectInvestigacion) => {

  const investigacionNew = objectInvestigacion;

  let rta = await sequelize.models.modelTamCapMerge.create(investigacionNew);
  return rta;

};

// ACTUALIZAR
async function tamCapUpdate(objectInvestigacionUpdate, id) {

    const investigacionNew = objectInvestigacionUpdate;
    

    const query = await sequelize.models.modelTamCapMerge.update(investigacionNew,{
        where: {id: id},
      });
  
    return query;
  }
  
// ELIMINAR DATA
async function tamCapDelete(id) {
    const query = await sequelize.models.modelTamCapMerge.destroy({
      where: {
        id: id,
      },
    });
  
    return query;
  }
  

module.exports = { 
    tamCapAll,
    tamCapCrear,
    tamCapFilter,
    tamCapUpdate,
    tamCapDelete, 
    tamCapFilterSelect,
    tamCapAllJoins
};