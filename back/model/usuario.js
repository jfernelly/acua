//Traer módulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema de la coleccion
const esquemaUsuario = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  fechaNacimiento:Date,
  genero:String,
  tipoDocumento: String,
  numeroDocumento: String,
  departamento: String,
  ciudad: String,
  direccion: String,
  tipoVivienda:String,
  telefono: String,
  correo: String,
  pass: String,
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});
// Generamos el JWT
esquemaUsuario.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nombre: this.nombre,
      correo: this.correo,
    },
    "clave"
  );
};
// Creamos los exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;