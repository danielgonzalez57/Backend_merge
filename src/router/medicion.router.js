const router = require("express").Router();
const Medicion = require("../models/medicion.model");
const sequelize = require("../config/conexion");

const {
  medicionAll,
  medicionCreated,
  medicionFilter,
  medicionUpdate,
  medicionDelete,
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
  investigacionDelete
} = require("../controllers/investigacion.controllers");

const {
  articuloAll,
  articuloFilter,
  articuloCreated,
  articuloUpdate,
  articuloDelete
} = require("../controllers/articulo.controllers");

const {
  marcasAll, 
  marcasCreated,
  marcasFilter,
  marcasUpdate,
  marcaDelete
} = require("../controllers/marcas.controllers");

const {
  lineaAll, 
  lineaCreated,
  lineaFilter,
  lineaUpdate,
  lineaDelete
} = require("../controllers/linea.controllers");


// OBTENER TODOS LOS DATOS DE LA TABLA MEDICION
router.get("/medicionAll", async (req, res) => {
  const rta = await medicionAll();
  res.json(rta);
});

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
    }
  } else {
    // USUARIO NO ENCONTRADO
    res.json({
      status: "error",
    });
  }

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

router.post("/update/user", async (req, res) => {
  try {
    //let user = req.body;
    //user.id = 23;
    const rta = await updateUser(req.body); // user
    const respuesta = rta.toJSON();
    res.json(respuesta);
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
    message: "Medicion creadas",
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
    message: query,
  });
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
  console.log(req.body)

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


// // ELIMINAR
router.delete("/lineasDelete/:id", async (req, res) => {
  
  const id = req.params.id;

  const query = await lineaDelete(id);

  res.json({
    status: "ok",
    message: query,
  });
});
module.exports = router;




