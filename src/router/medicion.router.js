const router = require('express').Router();

const Medicion = require("../model/medicion.model");

const { json } = require('sequelize');

const { 
    medicionAll, 
    medicionCreated,
    medicionFilter,
    medicionUpdate,
    medicionDelete
  } = require("../controllers/medicion.controllers");

// OBTENER TODOS LOS DATOS DE LA TABLA MEDICION
router.get("/medicionAll", async(req, res) => {

    const rta = await medicionAll();
    res.json(rta);
});

//  FILTRAR
router.get("/medicionFilter/:idFilter", async(req, res) => {

    const id = req.params.idFilter

    const query = await medicionFilter(id);
    res.json(query); 
});

// CREAR
router.post("/medicionDiaria", async(req, res) => {

    // data de formulario
    const { id_invest,
            hora,
            nro_visitantes,
            nro_facturas,
            user_crea,
            user_mod, 
        } = req.body;
       
    // PARA CREAR LA DB, SI NO EXISTE LA CREA 
    await Medicion.sync()

    const rta = await medicionCreated(id_invest, hora, nro_visitantes, nro_facturas, 
        user_crea, user_mod);

    res.json({
        status: 'ok', 
        message: 'Medicion creadas',
    });

});

// // ACTUAlIZAR
router.put("/medicionUpdate/:id", async(req, res) => {

    // ID DE LA URL
    const id = req.params.id;

     // data de formulario
     const { 
        id_invest,
        hora,
        user_crea,
        user_mod,
        nro_visitantes,
        nro_facturas
    } = req.body;

    const query = await medicionUpdate(id, id_invest, hora, nro_visitantes, nro_facturas, user_crea, 
        user_mod);

   res.json({ 
   status: 'ok', 
   message: query
})
});

// ELIMINAR
router.delete("/mediciondelete/:id", async(req, res) => {

    const id = req.params.id; 

    const query = await medicionDelete(id);

    res.json({
        status: 'ok', 
        message: query
    })
});

// //LOGIN
router.post("/auth",  async(req, res) => {

    const { usuario, password } = req.body;

    if (usuario == "dev" && password == "123") {
      res.json({
        status: "ok",
        token: '123456',
        rol : '1',
        user:{usuario, password}
      });
  
    }else if (usuario == "daniel" && password == "123") {
        res.json({
          status: "ok",
          token: '1234asd46',
          rol : '2',
          user:{usuario, password}
        });
  
    } else {
      res.json({
        status: "error",
      });
    }
  });

module.exports = router;