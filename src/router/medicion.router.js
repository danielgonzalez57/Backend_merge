const router = require("express").Router();
const Medicion = require("../models/medicion.model");
const sequelize = require("../config/conexion");

const {
  medicionAll,
  medicionCreated,
  medicionFilter,
  medicionUpdate,
  medicionDelete,
  dataMedicionFilter,
  dataMedicionFilterDos,
  medicionFilterTrue
} = require("../controllers/medicion.controllers");

const {
  getUser,
  getUserId,
  getUserWithEmail,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/users.controller");

const {
  investigacionAll,
  createInvestigacion,
  investigacionFilter,
  investigacionUpdate,
  investigacionDelete,
  dataUSerFilter,
  investigacionFilterTrue
} = require("../controllers/investigacion.controllers");

const {
  createMaestroTienda,
  maestroTiendaAll,
  maestroTiendaFilter,
  maestroTiendaUpdate,
  maestroTiendaDelete,
  maestroTiendaAllConcat
} = require("../controllers/maestroTienda.controllers");

const {
  tipoArticuloAll,
  tipoArticuloCrear,
  tipoArticuloFilter,
  tipoArticuloUpdate,
  tipoArticuloDelete, 
  tipoArticuloFilterDos,
  tipoArticuloAllJoins
} = require("../controllers/tipoArticulo.controllers");

const {
  tamCapAll,
  tamCapCrear,
  tamCapFilter,
  tamCapUpdate,
  tamCapDelete,
  tamCapFilterSelect,
  tamCapAllJoins
} = require("../controllers/tamCap.controllers");

const {
  modeloAll,
  modeloAllJoins,
  modeloCrear,
  modeloFilter,
  modeloUpdate,
  modeloDelete,
  modeloFilterSelect,
  modeloFilterBuscador,
} = require("../controllers/modelo.controllers");

// CHRISTIAN
const {
  articuloAll,
  articuloFilter,
  articuloCreated,
  articuloUpdate,
  articuloDelete,
  articuloAllJoin
} = require("../controllers/articulo.controllers");

const {
  marcasAll, 
  marcasCreated,
  marcasFilter,
  marcasUpdate,
  marcaDelete,
  marcasFilterSelect
} = require("../controllers/marcas.controllers");

const {
  lineaAll, 
  lineaCreated,
  lineaFilter,
  lineaUpdate,
  lineaDelete
} = require("../controllers/linea.controllers");

// DILAN
const {
  getInvesProducts,
  getInvesProductsId,
  deleteInvesProducts,
  invesProductCreated,
  investigacionProductUpdate,
  searchModelInvestProduct,
  dataInvProdFilter,
  dataInvProdFilterDos
} = require("../controllers/invest.products.controller");

const {
  getCiudades
} = require("../controllers/ciudades.controllers");

const {
  getLineas
} = require("../controllers/lineas.controllers");


// OBTENER TODOS LOS DATOS DE LA TABLA MEDICION
router.get("/medicionAll", async (req, res) => {
  const rta = await medicionAll();
  res.json(rta);
});

//  FILTRAR
router.get("/medicionFilter/:idFilter", async (req, res) => {
  const id = req.params.idFilter;
  const query = await medicionFilter(id);
  res.json(query);
});

// CREAR
router.post("/medicionDiaria", async (req, res) => {
  // data de formulario
  const { id_invest, hora, nro_visitantes, nro_facturas, user_crea, user_mod } =
    req.body;

  // PARA CREAR LA DB, SI NO EXISTE LA CREA
  //await Medicion.sync();
  //await sequelize.sync();

  const rta = await medicionCreated(
    id_invest,
    hora,
    nro_visitantes,
    nro_facturas,
    user_crea,
    user_mod
  );

  res.json({
    status: "ok",
    message: "Medicion creadas",
  });
});

//  FILTRAR 2
router.post("/dataMedicionFilter", async (req, res) => {

  const user = req.body.valor;

  const query = await dataMedicionFilter(user);
  res.json(query);

});

//  FILTRAR investigacion
router.post("/medicionFilterTrue", async (req, res) => {

  const user = req.body.valorDos;
  const query = await medicionFilterTrue(user);
  res.json(query);

});

//  FILTRAR 2
router.get("/dataMedicionFilterDos/:key", async (req, res) => {

  const id_invest = req.params.key;


  const query = await dataMedicionFilterDos(id_invest);
  res.json(query);

});

//  FILTRAR 2
router.post("/dataUSerFilter", async (req, res) => {

  const user = req.body.valor;

  const query = await dataUSerFilter(user);
  res.json(query);

});

//  FILTRAR investigacion
router.post("/investigacionFilterTrue", async (req, res) => {

  const user = req.body.valorDos;
  console.log(user)
  const query = await investigacionFilterTrue(user);
  res.json(query);

});

//  FILTRAR 2
router.post("/dataInvProdFilter", async (req, res) => {

  const user = req.body.valor;

  const query = await dataInvProdFilter(user);
  res.json(query);

});
//  FILTRAR 2
router.get("/dataInvProdFilterDos/:key", async (req, res) => {

  const id = req.params.key;

  const query = await dataInvProdFilterDos(id);
  res.json(query);

});

// // ACTUAlIZAR
router.put("/medicionUpdate/:id", async (req, res) => {
  // ID DE LA URL
  const id = req.params.id;

  // data de formulario
  const { id_invest, hora, user_crea, user_mod, nro_visitantes, nro_facturas } =
    req.body;

  const query = await medicionUpdate(
    id,
    id_invest,
    hora,
    nro_visitantes,
    nro_facturas,
    user_crea,
    user_mod
  );

  res.json({
    status: "ok",
    message: query,
  });
});

// ELIMINAR
router.delete("/mediciondelete/:id", async (req, res) => {
  const id = req.params.id;

  const query = await medicionDelete(id);

  res.json({
    status: "ok",
    message: query,
  });
});

// ---------------- LOGIN --------------------------
router.post("/auth", async (req, res) => {
  // DATOS RECIBIDOS DESDE EL CLIENTE (CLIENTE).
  const { usuario, password } = req.body;

  // ENCRIPRTAR CONTRASEÑA AL MOMENTO DE GUARDAR EN LA BASE DE DATOS.
  let authUser = await getUserWithEmail(usuario);
  user = authUser[0];

  if (user != 0) {
    // USUARIO ENCONTRADO
    if (user[0].password == password) {
      // USUARIO AUTENTICADO
      res.json({
        status: "ok",
        token: user[0].id,
        rol: user[0].rol,
        usuario: user[0].nombre,
      });
    } else {
      // CONTRASEÑA INCORRECTA
      console.log("CONTRASEÑA INCORRECTA");
      res.json({
        status: "error",
      });
    }
  } else {
    // USUARIO NO ENCONTRADO
    res.json({
      status: "error",
    });
  }

});

// ---------------- USERS --------------------------
router.post("/create/user", async (req, res) => {
  const rta = await createUser(req.body);
  res.json(rta);
});

// ---------------- INVESTIGACIONES --------------------------

// OBTENER DATA
router.get("/investigacionAll", async (req, res) => {
  const rta = await investigacionAll();
  res.json(rta);
});

// CREAR
router.post("/investigacionCreated", async (req, res) => {
 
  const rta = await createInvestigacion(req.body);

  res.json({
    status: "ok",
    message: "investigacion creadas",
    respuesta: rta
  });
});

//  FILTRAR
router.get("/InvestigacionFilter/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await investigacionFilter(id);
  res.json(query);

});

// // ACTUAlIZAR
router.put("/investigacionUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;
  console.log(req.body)

  const query = await investigacionUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// ELIMINAR
router.delete("/investigacionDelete/:id", async (req, res) => {
  
  const id = req.params.id;
  const query = await investigacionDelete(id);

  res.json({
    status: "ok",
    message: query
  });
});

// ---------------- MAESTRO DE TIENDAS --------------------------
// OBTENER DATA
router.get("/maestroTiendaAll", async (req, res) => {

  const rta = await maestroTiendaAll();
  res.json(rta);

});

// OBTENER DATA Concatenada
router.get("/maestroTiendaAllConcat", async (req, res) => {

  const rta = await maestroTiendaAllConcat();
  res.json(rta);

});

router.post("/searchModelInvestProduct", async (req, res) => {
  // ACA VA UN REQ.ID
  //console.log(req.body.model);

  // LOGICA DE NEGOCIOS
  const rta = await searchModelInvestProduct(req.body.model);
  res.json(rta);

});

// CREAR
router.post("/maestroTiendaCreated", async (req, res) => {
 
  const rta = await createMaestroTienda(req.body);

  res.json({
    status: "ok",
    message: "Maestro de tienda creado",
    respuesta: rta
  });
});

//  FILTRAR
router.get("/maestroTiendaFilter/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await maestroTiendaFilter(id);
  res.json(query);

});

// ACTUAlIZAR
router.put("/maestroTiendaUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;
  console.log(req.body)

  const query = await maestroTiendaUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// ELIMINAR
router.delete("/maestroTiendaDelete/:id", async (req, res) => {
  
  const id = req.params.id;
  const query = await maestroTiendaDelete(id);

  res.json({
    status: "ok",
    message: query
  });
});

// ---------------- TIPO ARTICULO --------------------------
// // OBTENER DATA
router.get("/tipoArticuloAll", async (req, res) => {

  const rta = await tipoArticuloAll();
  res.json(rta);

});
// // OBTENER DATA JOINS
router.get("/tipoArticuloAllJoins", async (req, res) => {

  const rta = await tipoArticuloAllJoins();
  res.json(rta);

});
// // OBTENER DATA CON JOINS
router.get("/articuloAllJoin", async (req, res) => {

  const rta = await articuloAllJoin();
  res.json(rta);

});

// CREAR
router.post("/tipoArticuloCreated", async (req, res) => {
 
  const rta = await tipoArticuloCrear(req.body);

  res.json({
    status: "ok",
    message: "tipo de articulo creado",
    respuesta: rta
  });
});

//  FILTRAR
router.get("/tipoArticuloFilter/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await tipoArticuloFilter(id);
  res.json(query);

});

//  FILTRAR
router.get("/tipoArticuloFilterDos/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await tipoArticuloFilterDos(id);
  res.json(query);

});

// ACTUAlIZAR
router.put("/tipoArticuloUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;
  console.log(req.body)

  const query = await tipoArticuloUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// ELIMINAR
router.delete("/tipoArticuloDelete/:id", async (req, res) => {
  
  const id = req.params.id;
  const query = await tipoArticuloDelete(id);

  res.json({
    status: "ok",
    message: query
  });
});

// ---------------- TAMANO CAPACIDAD --------------------------
// // OBTENER DATA
router.get("/tamCapAll", async (req, res) => {

  const rta = await tamCapAll();
  res.json(rta);

});
// // OBTENER DATA JOIN
router.get("/tamCapAllJoins", async (req, res) => {

  const rta = await tamCapAllJoins();
  res.json(rta);

});

// CREAR
router.post("/tamCapCreated", async (req, res) => {
 
  const rta = await tamCapCrear(req.body);

  res.json({
    status: "ok",
    message: "tipo de articulo creado",
    respuesta: rta
  });
});

//  FILTRAR
router.get("/tamCapFilter/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await tamCapFilter(id);
  res.json(query);

});

//  FILTRAR
router.get("/tamCapFilterSelect/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await tamCapFilterSelect(id);
  res.json(query);

});

// ACTUAlIZAR
router.put("/temCapUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;
  console.log(req.body)

  const query = await tamCapUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// ELIMINAR
router.delete("/temCapDelete/:id", async (req, res) => {
  
  const id = req.params.id;
  const query = await tamCapDelete(id);

  res.json({
    status: "ok",
    message: query
  });
});
// ---------------- MODELO --------------------------
// // OBTENER DATA
router.get("/modeloAll", async (req, res) => {

  const rta = await modeloAll();
  res.json(rta);

});
// // OBTENER DATA
router.get("/modeloAllJoins", async (req, res) => {

  const rta = await modeloAllJoins();
  res.json(rta);

});

// CREAR
router.post("/modeloCreated", async (req, res) => {
 
  const rta = await modeloCrear(req.body);

  res.json({
    status: "ok",
    message: "tipo de articulo creado",
    respuesta: rta
  });
});

//  FILTRAR
router.get("/modeloFilter/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await modeloFilter(id);
  res.json(query);

});

//  FILTRAR BUSCADOR
router.post("/modeloFilterBuscador", async (req, res) => {

  const nombre = req.body;
  const query = await modeloFilterBuscador(req.body.model);
  if(query){
    res.json({
      status: "ok",
      message: "existe",
      respuesta: query
    });
  }else{
    res.json({
      status: "Error",
      message: "no existe",
      respuesta: query
    });
  }
 

});

//  FILTRAR
router.get("/modeloFilterSelect/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await modeloFilterSelect(id);
  res.json(query);

});

// ACTUAlIZAR
router.put("/modeloUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;
  console.log(req.body)

  const query = await modeloUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// ELIMINAR
router.delete("/modeloDelete/:id", async (req, res) => {
  
  const id = req.params.id;
  const query = await modeloDelete(id);

  res.json({
    status: "ok",
    message: query
  });
});

// CHRISTIAN
router.get("/getUser", async (req, res) => {
  const rta = await getUser();
  let depRta = rta[0];
  res.json(depRta);
});

router.get("/getUser/:id", async (req, res) => {
  const rta = await getUserId(req.params.id);
  let depRta = rta[0];
  res.json(depRta);
});
router.post("/create/user", async (req, res) => {
  try {
    //let user = req.body;
    //user.id = 23;

    const rta = await createUser(req.body); // user
    const respuesta = rta.toJSON();
    res.json(respuesta);
  } catch (error) {
    res.json(error);
  }
});

router.put("/update/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userUpdate = req.body;
    const rta = await updateUser(userUpdate, id); // user
    const respuesta = rta;
    res.json({
      status: "ok",
      message: respuesta,
    });
  } catch (error) {
    res.json(error);
  }
});

router.delete("/delete/user/:id", async (req, res) => {
  try {
    //let user = req.body;
    //user.id = 23;
    const rta = await deleteUser(req.params.id); // user
    const respuesta = rta.toJSON();
    res.json(respuesta);
  } catch (error) {
    res.json(error);
  }
});
// ---------------- ARTICULO --------------------------

// OBTENER DATA
router.get("/articuloAll", async (req, res) => {
  const rta = await articuloAll();
  res.json(rta);
});

// // CREAR
router.post("/articuloCreated", async (req, res) => {
 
  const rta = await articuloCreated(req.body);

  res.json({
    status: "ok",
    message: "Articulo creado",
    respuesta: rta
  });
});

//  FILTRAR
router.get("/articuloFilter/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await articuloFilter(id);
  res.json(query);

 });

// // ACTUAlIZAR
router.put("/articuloUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;

  const query = await articuloUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// // ELIMINAR
router.delete("/articuloDelete/:id", async (req, res) => {
  
  const id = req.params.id;

  const query = await articuloDelete(id);

  res.json({
    status: "ok",
    message: query,
  });
});


// ---------------- MARCAS --------------------------

// OBTENER DATA
router.get("/marcasAll", async (req, res) => {
  const rta = await marcasAll();
  res.json(rta);
});

// // CREAR
router.post("/marcasCreated", async (req, res) => {
 
  const rta = await marcasCreated(req.body);

  res.json({
    status: "ok",
    message: "Marca creada",
    respuesta: rta
  });
});

// //  FILTRAR
router.get("/marcasFilter/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await marcasFilter(id);
  res.json(query);

 });
// //  FILTRAR
router.get("/marcasFilterSelect/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await marcasFilterSelect(id);
  res.json(query);

 });

// // ACTUAlIZAR
router.put("/marcaUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;
  console.log(req.body)

  const query = await marcasUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// // ELIMINAR
router.delete("/marcaDelete/:id", async (req, res) => {
  
  const id = req.params.id;

  const query = await marcaDelete(id);

  res.json({
    status: "ok",
    message: query,
  });
});


// ---------------- LINEAS --------------------------

// OBTENER DATA
router.get("/lineasAll", async (req, res) => {
  const rta = await lineaAll();
  res.json(rta);
});

// // CREAR
router.post("/lineasCreated", async (req, res) => {
 
  const rta = await lineaCreated(req.body);

  res.json({
    status: "ok",
    message: "Linea creada",
    respuesta: rta
  });
});

// //  FILTRAR
router.get("/lineasFilter/:idFilter", async (req, res) => {

  const id = req.params.idFilter;
  const query = await lineaFilter(id);
  res.json(query);

 });

// // ACTUAlIZAR
router.put("/lineasUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;
  console.log(req.body)

  const query = await lineaUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// ELIMINAR
router.delete("/lineasDelete/:id", async (req, res) => {
  
  const id = req.params.id;

  const query = await lineaDelete(id);

  res.json({
    status: "ok",
    message: query,
  });
});

// INVESTIGACION PROD
router.get("/investProducts", async (req, res) => {
  const query = await getInvesProducts();
  res.json(query);
});

router.get("/investProducts/:id", async (req, res) => {
  const query = await getInvesProductsId(req.params.id);
  res.json(query);
});

router.delete("/investProducts/delete/:id", async (req, res) => {
  const query = await deleteInvesProducts(req.params.id);
  res.json(query);
});

router.post("/invesProductCreated", async (req, res) => {
 
  const rta = await invesProductCreated(req.body);
  res.json({
    status: "ok",
    message: "Linea creada",
    respuesta: rta
  });
  
});

// // ACTUAlIZAR
router.put("/investProductUpdate/:id", async (req, res) => {

  // ID DE LA URL
  const id = req.params.id;
  console.log(req.body)

  const query = await investigacionProductUpdate(req.body, id);

  res.json({
    status: "ok",
    message: query,
  });
});

// CIUDADES
router.get("/getCiudades", async (req, res) => {
  const query = await getCiudades();
  res.json(query);
});

// LINEAS
router.get("/getLineas", async (req, res) => {
  const query = await getLineas();
  res.json(query);
});

module.exports = router;






