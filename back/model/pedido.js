// Modulos internos
const mongoose = require("mongoose");
// Esquema
const esquemaPedido = new mongoose.Schema({
  idUsuario: String,
  genero: String,
  edad: Number,
  caracter: String,
  aroma: String,
  favoritos: String,
  nombres: String,
  apellidos: String,
  direccion: String,
  ciudad: String,
  telefono: String,
  email: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
});
// Creamos los exports
const Pedido = mongoose.model("pedido", esquemaPedido);
module.exports = Pedido;
