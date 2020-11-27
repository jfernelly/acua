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
  fecha: {
    type: Date,
    default: Date.now,
  },
});
// Creamos los exports
const Pedido = mongoose.model("pedido", esquemaPedido);
module.exports = Pedido;
