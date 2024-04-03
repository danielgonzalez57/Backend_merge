const sequelize = require("../config/conexion");

// OBTENER DATA
const tipoArticuloAll = async () => {

    const rta = await sequelize.models.modelTipoArticuloMerge.findAll();

    return rta;
  
  };

const tipoArticuloAllJoins = async () => {

  const rta = await sequelize.query(
    `select t0.id, 
    t0.nombre,  
    t1.nombre as id_articulo,
    t0.user_crea, 
    t0.user_mod,
    t0.fec_crea, 
    t0.fec_mod
    from dkval_Merge.dim_TIPO_ART_MERGE t0
    left join dkval_Merge.dim_ARTICULO_MERGE t1 ON t0.id_articulo = t1.id`
  );

    return rta;
  
  };

// FILTRAR DATA
async function tipoArticuloFilter(id) {
    const query = await sequelize.models.modelTipoArticuloMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }

// FILTRAR DATA
async function tipoArticuloFilterDos(id) {
    const query = await sequelize.models.modelTipoArticuloMerge.findAll({
      where: {
        id_articulo: id,
      },
    });
  
    return query;
  }

// CREAR DATA
const tipoArticuloCrear = async (objectInvestigacion) => {

  const investigacionNew = objectInvestigacion;

  let rta = await sequelize.models.modelTipoArticuloMerge.create(investigacionNew);
  return rta;

};

// ACTUALIZAR
async function tipoArticuloUpdate(objectInvestigacionUpdate, id) {

    const investigacionNew = objectInvestigacionUpdate;
    

    const query = await sequelize.models.modelTipoArticuloMerge.update(investigacionNew,{
        where: {id: id},
      });
  
    return query;
  }
  
// ELIMINAR DATA
async function tipoArticuloDelete(id) {
    const query = await sequelize.models.modelTipoArticuloMerge.destroy({
      where: {
        id: id,
      },
    });
  
    return query;
  }
  

module.exports = { 
    tipoArticuloAll,
    tipoArticuloCrear,
    tipoArticuloFilter,
    tipoArticuloUpdate,
    tipoArticuloDelete,
    tipoArticuloFilterDos,
    tipoArticuloAllJoins
};