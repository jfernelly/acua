//modulos de node

const express = require("express");
const router = express.Router();

//modulos internos

const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");

 

//rutas
///obtener datos del usuario

router.get("/datos", auth, async (req, res) => {
  //buscamos usuario loggeado
  const usuario = await Usuario.findById(req.usuario._id);
  //si el usuario no existe
  if (!usuario) return res.status(401).send("Usuario no existe en BD");
  //Si el usuario existe
  const datos = await datos.find({ idUsuario: req.usuario._id });
  res.send(datos);
});

// registrar datos

router.post("/", auth, async (req, res) => {
  //obtenemos el id del usuario logeado con correo y pass
  const usuario = await Usuario.findById(req.usuario._id);
  //si el user no existe
  if (!usuario) return res.status(401).send("El usuario no existe");
  //si existe creamos una actividad en el tablero
  const datos = new Datos({
    idUsuario: usuario._id,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    estado: req.body.estado,
  });

  //enviamos el resulado
  const result = await datos.save();
  res.status(200).send(result);
});


//guardar en BD la imagen

const datos = new Datos ({
  idUsuario: usuario._id,
  nombre:req.body.name,
  estado: req.body.estado,
  descripcion: req.body.descripcion,
  
  
});
 const result = await datos.save();
    res.status(200).send(result);


  
//editar actividad

router.put("/", auth, async (req, res) => {
  //buscamos el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //si el user no existe
  if (!usuario) return res.status(401).send("El usuario no existe");

  //si existe usuario
  //realizamos el update
  const datos = await Datos.findByIdAndUpdate(
    req.body._id,
    {
      idUsuario: usuario._id,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      estado: req.body.estado,
    },
    {
      new: true,
    }
  );
  //si no hay actividades para el usuario
  if (!datos) 
  return res.status(401).send("No hay actividades asignadas");
  //si se realizo un update a alguna actividad
  res.status(200).send(tablero);
});



//exports
module.exports = router;
