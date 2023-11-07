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

// LOGIN
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
        user: { usuario, password },
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

  // if (usuario == "dev" && password == "123") {
  //   res.json({
  //     status: "ok",
  //     token: "123456",
  //     rol: "1",
  //     user: { usuario, password },
  //   });
  // } else if (usuario == "daniel" && password == "123") {
  //   res.json({
  //     status: "ok",
  //     token: "1234asd46",
  //     rol: "2",
  //     user: { usuario, password },
  //   });
  // } else {
  //   res.json({
  //     status: "error",
  //   });
  // }
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

module.exports = router;
