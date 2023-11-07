const sequelize = require("../config/conexion");

// OBTENER DATA
const articuloAll = async () => {

    const rta = await sequelize.models.modelArticuloMerge.findAll();

    return rta;
  
  };

// FILTRAR DATA
async function articuloFilter(id) {
    const query = await sequelize.models.modelInvesMerge.findOne({
      where: {
        id: id,
      },
    });
  
    return query;
  }


  

module.exports = { 
    articuloAll, 
    articuloFilter,
};