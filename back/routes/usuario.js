// Modulos internos
const express = require("express");
const router = express.Router();
// Modulos creados
const { Usuario } = require("../model/usuario");
// Ruta
router.post("/", async (req, res) => {
    // Revisamos si existe el mismo correo en BD
    let usuario = await Usuario.findOne({ correo: req.body.correo});
    // si el usuario existe en bd
    if(usuario) return res.status(400).send("El usuario ya existe en BD");
    // si el correo no existe
    usuario = new Usuario({

        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipoDocumento: req.body.tipoDocumento,
        numeroDocumento: req.body.numeroDocumento,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        pass: req.body.pass,
    })
// Guardamos el usuario en BD y se genera el JWT
   const result = await usuario.save();
   const jwtToken = usuario.generateJWT();
   res.status(200).send({jwtToken})

})
// Exports
module.exports = router;
