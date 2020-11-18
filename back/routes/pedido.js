// Modulos de node
const express = require("express");
const router = express.Router();
// Modulos internos
const Pedido = require("../model/pedido");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");
const cargarArchivo = require("../middleware/file");
// Rutas
// Obtener actividades del usuario
router.get("/lista", auth, async (req, res) => {
  // Buscamos el usuario logueado
  const usuario = await Usuario.findById(req.usuario._id);
  // Si el usuario no existe
  if (!usuario) return res.status(401).send("Usuario no existe en BD");
  // Si el usuario si existe
  const pedido = await Pedido.find({ idUsuario: req.usuario._id });
  res.send(pedido);
});

// Registrar Actividad
router.post("/", auth, async (req, res) => {
  // obtenemos el id del usuario logeado con correo y pass
  const usuario = await Usuario.findById(req.usuario._id);
  // Si el usuario no existe
  if (!usuario) return res.status(401).send("El usuario no existe");
  // si existe el usuario creamos una actividad en el pedido
  const pedido = new Pedido({
    idUsuario: usuario._id,
    pedido: req.body.pedido,
    estado: req.body.estado,
  });
  // enviamos el resultado
  const result = await pedido.save();
  res.status(200).send(result);
});
// Registrar actividad con imagen
router.post(
  "/cargarArchivo",
  cargarArchivo.single("imagen"),
  auth,
  async (req, res) => {
    // Recibe protocolo http y https con el local o dominio
    const url = req.protocol + "://" + req.get("host");
    // verificamos si existe el usuario
    const usuario = await Usuario.findById(req.usuario._id);
    // si el usuario no existe
    if (!usuario) return res.status(400).send("No existe el usuario en BD");
    // Definimos la ruta de imagen como null
    let rutaImagen = null;
    if (req.file.filename) {
      rutaImagen = url + "/public/" + req.file.filename;
    } else {
      rutaImagen = null;
    }
    // guardamos en BD la imagen
    const pedido = new Pedido({
      idUsuario: usuario._id,
      pedido: req.body.pedido,
      estado: req.body.estado,
      imagen: rutaImagen,
    });

    const result = await pedido.save();
    res.status(201).send(result);
  }
);

// Editar actividad
router.put("/", auth, async (req, res) => {
  // buscamos el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  // Si el usuario no existe
  if (!usuario) return res.status(401).send("El usuario no existe en BD");
  // Realizamos el Update
  const pedido = await Pedido.findByIdAndUpdate(
    req.body._id,
    {
      idUsuario: usuario._id,
      pedido: req.body.pedido,
      estado: req.body.estado,
    },
    {
      new: true,
    }
  );
  // si no hay actividadades para el usuario
  if (!pedido)
    return res.status(401).send("no hay actividad asignada para el usuario: ");
  // si se realizo un update a alguna actividad
  res.status(200).send(pedido);
});
// Eliminar actividad
router.delete("/:_id", auth, async (req, res) => {
  // Buscamos el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  // Si no existe el usuario
  if (!usuario) return res.status(401).send("No existe usuario en bd");
  // Eliminamos actividad asignada al usuario
  const pedido = await Pedido.findByIdAndDelete(req.params._id);
  // si no existe la actividad
  if (!pedido) return res.status(401).send("No hoy actividad con ese ID");
  // Si se encuentra la actividad
  res.status(200).send({ message: "Actividad eliminada" });
});

// exports
module.exports = router;
